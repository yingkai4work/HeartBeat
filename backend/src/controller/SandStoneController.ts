import {
  Context,
  description,
  query,
  request,
  responses,
  summary,
  tagsAll,
} from "koa-swagger-decorator";
import { KanbanTokenVerifyResponse } from "../contract/kanban/KanbanTokenVerifyResponse";
import {
  SandStoneReportModel,
  SandStoneReportSchema,
} from "./sand-stone-models/KanbanTokenVerify";
import { PrivateJira } from "./sand-stone-service/PrivateJira";
import { MULTI_ASSIGNEE } from "./sand-stone-samples/multi-assignee";
import { MULTI_ASSIGNEE2 } from "./sand-stone-samples/multi-assignee2";
import { NORMAL } from "./sand-stone-samples/normal";
import { REOPEN_NOT_DONE } from "./sand-stone-samples/reopen-not-done";

import { writeFile } from "fs";
import { resolve } from "path";

const histories = MULTI_ASSIGNEE.changelog.histories;
// const histories = MULTI_ASSIGNEE2.changelog.histories;
// const histories = NORMAL.changelog.histories;
// const histories = REOPEN_NOT_DONE.changelog.histories;

@tagsAll(["KanbanController"])
export default class SandStoneController {
  @request("get", "/sandStone/generate-report")
  @summary("sandStone report")
  @description("sandStone report")
  @query(SandStoneReportSchema)
  @responses((KanbanTokenVerifyResponse as any).swaggerDocument)
  public static async verifyToken(ctx: Context): Promise<void> {
    const sandStoneReportModel: SandStoneReportModel = ctx.validatedQuery;
    console.log(sandStoneReportModel);

    const res: {
      id: string | number;
      assigneesWithCycleTime: {
        userId: string;
        name: string | null;
        cycleTime: { [attr: string]: number };
      }[];
      reopenRate: number;
    }[] = [];

    /*
                                                const issues = await new PrivateJira().getIssues(sandStoneReportModel.jql);
                                                issues.forEach((issue, index) => {
                                                      res.push({
                                                        id: index, // issue.id
                                                        assigneesWithCycleTime: new PrivateJira().getAssigneesWithCycleTime(
                                                          issue.changelog.histories
                                                        ),
                                                        reopenRate: new PrivateJira().getReopenRate(issue.changelog.histories),
                                                      });
                                                    });*/
    res.push({
      id: 0, // issue.id
      assigneesWithCycleTime: new PrivateJira().getAssigneesWithCycleTime(
        histories
      ),
      reopenRate: new PrivateJira().getReopenRate(histories),
    });
    res.push({
      id: 0, // issue.id
      assigneesWithCycleTime: new PrivateJira().getAssigneesWithCycleTime(
        histories
      ),
      reopenRate: new PrivateJira().getReopenRate(histories),
    });

    const path = resolve(__dirname, "./sand-stone-output/output.csv");
    console.log(path);

    let csvFormatOutput = "";
    res.forEach((cardInfo) => {
      let tmpStr: string;
      tmpStr = `card:,${cardInfo.id}\r\n`;
      tmpStr = tmpStr + `reopenRate:,${cardInfo.reopenRate}\r\n`;
      tmpStr = tmpStr + "userId,name,Open,In Progress,For Review,UnderQA\r\n";
      cardInfo.assigneesWithCycleTime.forEach((assigneeCycleTimeInfo) => {
        tmpStr =
          tmpStr +
          `${assigneeCycleTimeInfo.userId},${assigneeCycleTimeInfo.name},${assigneeCycleTimeInfo.cycleTime["Open"]},${assigneeCycleTimeInfo.cycleTime["In Progress"]},${assigneeCycleTimeInfo.cycleTime["For Review"]},${assigneeCycleTimeInfo.cycleTime["Under QA"]}\r\n`;
      });
      csvFormatOutput = csvFormatOutput + tmpStr + "\r\n";
    });

    writeFile(
      path,
      csvFormatOutput,
      {
        encoding: "utf-8",
      },
      (err) => {
        return null;
      }
    );

    ctx.response.body = res;
  }
}

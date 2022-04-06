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
// import { NORMAL } from "./sand-stone-samples/normal";
import { REOPEN_NOT_DONE } from "./sand-stone-samples/reopen-not-done";

// const histories = MULTI_ASSIGNEE.changelog.histories;
// const histories = MULTI_ASSIGNEE2.changelog.histories;
// const histories = NORMAL.changelog.histories;
const histories = REOPEN_NOT_DONE.changelog.histories;

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
    ctx.response.body = {
      assigneesWithCycleTime: new PrivateJira().getAssigneesWithCycleTime(
        histories
      ),
      reopenRate: new PrivateJira().getReopenRate(histories),
    };
  }
}

import { PrivateJiraHistory as History } from "../sand-stone-models/PrivateJiraHistory";
import { PrivateJiraAssignee as Assignee } from "../sand-stone-models/PrivateJiraAssignee";
import moment, { Moment } from "moment";
import axios from "axios";

enum STATUS {
  IN_PROGRESS = "In Progress",
  OPEN = "Open",
  FOR_REVIEW = "For Review",
  UNDER_QA = "Under QA",
}

export class PrivateJira {
  getAssignees(histories: History[]): Assignee[] {
    const filterMap: { [props: string]: boolean } = {};
    const assigneeSet: Set<Assignee> = new Set();
    histories.forEach((history) => {
      history.items.forEach((item) => {
        if (item.field === "assignee") {
          if (item.from !== null && !filterMap[item.from]) {
            filterMap[item.from] = true;
            assigneeSet.add({ userId: item.from, name: item.fromString });
          }
          if (item.to !== null && !filterMap[item.to]) {
            filterMap[item.to] = true;
            assigneeSet.add({ userId: item.to, name: item.toString });
          }
        }
      });
    });
    return Array.from(assigneeSet);
  }

  getReopenRate(histories: History[]): number {
    let enterQA = false;
    let count = 0;
    histories.forEach((history) => {
      history.items.forEach((item) => {
        if (item.field === "status") {
          if (
            item.fromString === "In Progress" &&
            item.toString === "For Review"
          ) {
            enterQA = true;
          }
          if (
            enterQA &&
            item.fromString === "Under QA" &&
            item.toString === "In Progress"
          ) {
            count++;
            enterQA = false;
          }
        }
      });
    });

    return count;
  }

  getCycleTime1(
    histories: History[],
    assignees: Assignee[]
  ): { userId: string; name: string | null; cycleTime: number }[] {
    let timeStamp: Moment | null;
    let currentWorkflow: string | null;
    let currentHolder: string | null;
    const cycleTimeMap: { [props: string]: number } = {};

    histories.forEach((history) => {
      history.items.forEach((item) => {
        if (item.field === "status") {
          if (item.toString === STATUS.OPEN) {
            timeStamp = null;
            if (currentHolder) currentHolder = null;
          } else {
            if (!timeStamp) timeStamp = moment(history.created);
          }
          currentWorkflow = item.toString;
        }

        if (item.field === "assignee" && currentWorkflow !== STATUS.OPEN) {
          if (!currentHolder && item.toString) {
            currentHolder = item.toString;
            timeStamp = moment(history.created);
          } else if (currentHolder) {
            if (
              !cycleTimeMap[currentHolder] &&
              cycleTimeMap[currentHolder] !== 0
            ) {
              cycleTimeMap[currentHolder] = 0;
            } else {
              cycleTimeMap[currentHolder] =
                cycleTimeMap[currentHolder] +
                moment(history.created).diff(timeStamp, "days") +
                1;
            }
            timeStamp = moment(history.created);
            currentHolder = item.toString;
          }
        }
      });
    });

    const result: { userId: string; name: string | null; cycleTime: number }[] =
      [];

    assignees.forEach((assignee) => {
      result.push({
        userId: assignee.userId,
        name: assignee.name,
        cycleTime: cycleTimeMap[assignee.userId],
      });
    });

    console.log(cycleTimeMap);

    return result;
  }

  getAssigneesWithCycleTime(histories: History[]): {
    userId: string;
    name: string | null;
    cycleTime: { [attr: string]: number };
  }[] {
    let timeStamp: Moment | null;
    let currentWorkflow: string | null = "Open";
    let currentHolder: string | null;
    const cycleTimeMap: { [props: string]: { [attr: string]: number } } = {};

    const assignees = this.getAssignees(histories);
    assignees.forEach((assignee) => {
      cycleTimeMap[assignee.userId] = {
        [STATUS.OPEN]: 0,
        [STATUS.IN_PROGRESS]: 0,
        [STATUS.FOR_REVIEW]: 0,
        [STATUS.UNDER_QA]: 0,
      };
    });

    histories.forEach((history) => {
      history.items.forEach((item) => {
        if (item.field === "status") {
          if (currentWorkflow && currentHolder) {
            cycleTimeMap[currentHolder][currentWorkflow] =
              cycleTimeMap[currentHolder][currentWorkflow] +
              moment(history.created).diff(timeStamp, "days") +
              1;
            // console.log(
            //   currentHolder,
            //   currentWorkflow,
            //   moment(history.created).diff(timeStamp, "days") + 1
            // );
          }
          currentWorkflow = item.toString;
          timeStamp = moment(history.created);
        }
        if (item.field === "assignee") {
          if (currentWorkflow && currentHolder) {
            cycleTimeMap[currentHolder][currentWorkflow] =
              cycleTimeMap[currentHolder][currentWorkflow] +
              moment(history.created).diff(timeStamp, "days") +
              1;
          }
          // console.log(
          //   currentHolder,
          //   currentWorkflow,
          //   moment(history.created).diff(timeStamp, "days") + 1
          // );
          currentHolder = item.to;
          timeStamp = moment(history.created);
        }
      });
    });

    const result: {
      userId: string;
      name: string | null;
      cycleTime: { [attr: string]: number };
    }[] = [];

    assignees.forEach((assignee) => {
      result.push({
        userId: assignee.userId,
        name: assignee.name,
        cycleTime: cycleTimeMap[assignee.userId],
      });
    });

    return result;
  }

  async getIssues(
    jql: string
  ): Promise<
    {
      key: string;
      fields: { summary: string };
      changelog: { histories: History[] };
    }[]
  > {
    const res = await axios.get(
      "https://jira.sandstone.com.au/rest/api/2/search?jql=project=UECSUP&expand=changelog",
      {
        // const res = (await axios.get("https://jira.sandstone.com.au/rest/api/2/search?jql=id=UECSUP-8059&expand=changelog",  {
        auth: {
          username: "",
          password: "",
        },
      }
    );

    // return res.data.issues[0].changelog.histories;
    return res.data.issues;
  }
}

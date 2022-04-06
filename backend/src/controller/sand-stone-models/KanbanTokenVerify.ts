export const SandStoneReportSchema = {
  cardId: { type: "string", description: "sandStone cardId" },
  jql: { type: "string", description: "sandStone jql" },
};

export class SandStoneReportModel {
  cardId: string;
  jql: string;

  constructor(cardId: string, jql: string) {
    this.cardId = cardId;
    this.jql = jql;
  }
}

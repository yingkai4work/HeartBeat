export const SandStoneReportSchema = {
    cardId: {type: "string", required: true, description: "sandStone cardId"},
};

export class SandStoneReportModel {
    cardId: string;

    constructor(
        cardId: string,
    ) {
        this.cardId = cardId;
    }
}

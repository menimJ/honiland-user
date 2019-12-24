export class OldCardModel {
    amount: string;
    card_id: string;

    constructor(data?: any) {
        data = data || {};
        this.amount = data.amount || '';
        this.card_id = data.card_id || '';
    }
}

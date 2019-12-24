export class CardModel {
    provider: string;
    payMethod: string;
    amount: string;
    trx_ref: string;
    cardToken: string;
    expiryYear: string;
    expiryMonth: string;
    cardType: string;
    last4: string;

    constructor(data?: any) {
        data = data || {};
        this.provider = data.provider || '';
        this.payMethod = data.payMethod || '';
        this.amount = data.amount || '';
        this.trx_ref = data.trx_ref || '';
        this.cardToken = data.cardToken || '';
        this.expiryYear = data.expiryYear || '';
        this.expiryMonth = data.expiryMonth || '';
        this.cardType = data.cardType || '';
        this.last4 = data.last4 || '';
    }
}


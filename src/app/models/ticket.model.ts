export class Ticket {
    subject: string;
    message: string;

    constructor(data?: any) {
        data = data || {};
        this.subject = data.subject || '';
        this.message = data.message || '';
    }
}

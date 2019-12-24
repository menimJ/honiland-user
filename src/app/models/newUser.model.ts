export class NewUserModel {
    first_name: String;
    last_name: String;
    email: String;
    username: String;
    password1: String;
    password2: String;

    constructor(data?: any) {
        data = data || {};

        this.first_name = data.first_name || '';
        this.last_name = data.last_name || '';
        this.email = data.email || '';
        this.username = data.username || '';
        this.password1 = data.password1 || '';
        this.password2 = data.password2 || '';
    }
}
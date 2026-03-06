export class LoginPage{

    constructor(page){

        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginBtn = page.locator('button[type="submit"]');
        this.dashboardHeader = page.locator('h6:has-text("Dashboard")')

    }

    async navigateToLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')

    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async verifyLoginSuccess(){

        await this.dashboardHeader.waitFor()

    }
}
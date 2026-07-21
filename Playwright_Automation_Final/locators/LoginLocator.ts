import {Locator, Page} from "@playwright/test"
import { Sign } from "node:crypto";

export class LoginLocator{

    readonly loginHead: Locator;

    readonly demoUser: Locator;

    readonly signIn: Locator;

    readonly email:Locator;
    readonly password:Locator;

    constructor(page:Page){

         this.loginHead = page.getByRole("heading",{name:"Sign In"});
         this.email= page.getByLabel('login-email');
         this.password = page.getByLabel('login-password');
         this.demoUser = page.getByRole("button", {name: /Alice Johnson/i});
         this.signIn = page.getByRole("button", {name:/Sign in/i});
    }
}
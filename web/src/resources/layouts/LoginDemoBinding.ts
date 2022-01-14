import {inflateHtmlFile} from "android-xml-runtime";
import html from './login_demo.html'

//! Declares com.lightningkite.rxexample.databinding.LoginDemoBinding
export interface LoginDemoBinding {
    root: HTMLElement
    username: HTMLInputElement
    password: HTMLInputElement
    verifyPassword: HTMLInputElement
    submit: HTMLButtonElement
    submitLoading: HTMLDivElement
    agree: {root: HTMLLabelElement, input: HTMLInputElement, label: HTMLSpanElement}
}

export namespace LoginDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["username", "password", "verifyPassword", "submit", "submitLoading"], {agree: ["root", "input", "label"]}) as LoginDemoBinding
   }
}

import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './login_demo.html'


//! Declares com.lightningkite.rxexample.databinding.LoginDemoBinding
export interface LoginDemoBinding {
    root: HTMLElement
    username: HTMLInputElement
    password: HTMLInputElement
    verifyPassword: HTMLInputElement
    submit: HTMLButtonElement
    submitLoading: HTMLDivElement
    agree: HTMLLabelElement & {input: HTMLInputElement, label: HTMLSpanElement}
    
}

export namespace LoginDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): LoginDemoBinding {
       return inflateHtmlFile(variants, ["username", "password", "verifyPassword", "submit", "submitLoading"], {agree: ["input", "label"]}, {}) as LoginDemoBinding
   }
}

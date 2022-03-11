import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './date_button_demo.html'


//! Declares com.lightningkite.rxexample.databinding.DateButtonDemoBinding
export interface DateButtonDemoBinding {
    root: HTMLElement
    text: HTMLDivElement
    dateButton: HTMLButtonElement
    timeButton: HTMLButtonElement
    
}

export namespace DateButtonDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined
}]
   export function inflate(): DateButtonDemoBinding {
       return inflateHtmlFile(variants, ["text", "dateButton", "timeButton"], {}, {}) as DateButtonDemoBinding
   }
}

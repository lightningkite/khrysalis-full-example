import {inflateHtmlFile} from "android-xml-runtime";
import html from './date_button_demo.html'

//! Declares com.lightningkite.rxexample.databinding.DateButtonDemoBinding
export interface DateButtonDemoBinding {
    root: HTMLElement
    text: HTMLDivElement
    dateButton: HTMLButtonElement
    timeButton: HTMLButtonElement
    
}

export namespace DateButtonDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["text", "dateButton", "timeButton"], {}) as DateButtonDemoBinding
   }
}

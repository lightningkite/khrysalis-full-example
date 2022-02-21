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
   export function inflate(): DateButtonDemoBinding {
       return inflateHtmlFile(html, ["text", "dateButton", "timeButton"], {}, {}) as DateButtonDemoBinding
   }
}

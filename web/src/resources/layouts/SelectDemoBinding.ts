import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './select_demo.html'


//! Declares com.lightningkite.rxexample.databinding.SelectDemoBinding
export interface SelectDemoBinding {
    root: HTMLElement
    list: HTMLDivElement
    
}

export namespace SelectDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined
}]
   export function inflate(): SelectDemoBinding {
       return inflateHtmlFile(variants, ["list"], {}, {}) as SelectDemoBinding
   }
}

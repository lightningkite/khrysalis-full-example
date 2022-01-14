import {inflateHtmlFile} from "android-xml-runtime";
import html from './select_demo.html'

//! Declares com.lightningkite.rxexample.databinding.SelectDemoBinding
export interface SelectDemoBinding {
    root: HTMLElement
    list: HTMLDivElement
    
}

export namespace SelectDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["list"], {}) as SelectDemoBinding
   }
}

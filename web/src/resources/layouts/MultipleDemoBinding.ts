import {inflateHtmlFile} from "android-xml-runtime";
import html from './multiple_demo.html'

//! Declares com.lightningkite.rxexample.databinding.MultipleDemoBinding
export interface MultipleDemoBinding {
    root: HTMLElement
    list: HTMLDivElement
    
}

export namespace MultipleDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["list"], {}) as MultipleDemoBinding
   }
}

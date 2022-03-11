import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './basic_example.html'


//! Declares com.lightningkite.rxexample.databinding.BasicExampleBinding
export interface BasicExampleBinding {
    root: HTMLElement
    theNumber: HTMLDivElement
    incrementTheNumber: HTMLButtonElement
    
}

export namespace BasicExampleBinding {
   const variants = [{
    html: html,
    widerThan: undefined
}]
   export function inflate(): BasicExampleBinding {
       return inflateHtmlFile(variants, ["theNumber", "incrementTheNumber"], {}, {}) as BasicExampleBinding
   }
}

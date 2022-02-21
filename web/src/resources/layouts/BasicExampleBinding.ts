import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './basic_example.html'


//! Declares com.lightningkite.rxexample.databinding.BasicExampleBinding
export interface BasicExampleBinding {
    root: HTMLElement
    theNumber: HTMLDivElement
    incrementTheNumber: HTMLButtonElement
    
    
}

export namespace BasicExampleBinding {
   export function inflate(): BasicExampleBinding {
       return inflateHtmlFile(html, ["theNumber", "incrementTheNumber"], {}, {}) as BasicExampleBinding
   }
}

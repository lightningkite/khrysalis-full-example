import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './component_test.html'


//! Declares com.lightningkite.rxexample.databinding.ComponentTestBinding
export interface ComponentTestBinding {
    root: HTMLElement
    label: HTMLDivElement
    button: HTMLButtonElement
    
    
}

export namespace ComponentTestBinding {
   export function inflate(): ComponentTestBinding {
       return inflateHtmlFile(html, ["label", "button"], {}, {}) as ComponentTestBinding
   }
}

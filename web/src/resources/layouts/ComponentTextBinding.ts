import {inflateHtmlFile} from "android-xml-runtime";
import html from './component_text.html'

//! Declares com.lightningkite.rxexample.databinding.ComponentTextBinding
export interface ComponentTextBinding {
    root: HTMLElement
    label: HTMLDivElement
    
}

export namespace ComponentTextBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["label"], {}) as ComponentTextBinding
   }
}

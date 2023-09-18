import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './component_text.html'


//! Declares com.lightningkite.rxexample.databinding.ComponentTextBinding
export interface ComponentTextBinding {
    root: HTMLElement
    label: HTMLDivElement
    
}

export namespace ComponentTextBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): ComponentTextBinding {
       return inflateHtmlFile(variants, ["label"], {}, {}) as ComponentTextBinding
   }
}

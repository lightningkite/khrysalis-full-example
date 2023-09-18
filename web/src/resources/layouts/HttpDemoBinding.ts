import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './http_demo.html'


//! Declares com.lightningkite.rxexample.databinding.HttpDemoBinding
export interface HttpDemoBinding {
    root: HTMLElement
    progress: HTMLProgressElement
    items: HTMLDivElement
    
}

export namespace HttpDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): HttpDemoBinding {
       return inflateHtmlFile(variants, ["progress", "items"], {}, {}) as HttpDemoBinding
   }
}

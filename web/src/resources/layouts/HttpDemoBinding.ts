import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './http_demo.html'

//! Declares com.lightningkite.rxexample.databinding.HttpDemoBinding
export interface HttpDemoBinding {
    root: HTMLElement
    progress: HTMLProgressElement
    items: HTMLDivElement
    
}

export namespace HttpDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["progress", "items"], {}) as HttpDemoBinding
   }
}

import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './websocket_demo.html'


//! Declares com.lightningkite.rxexample.databinding.WebsocketDemoBinding
export interface WebsocketDemoBinding {
    root: HTMLElement
    items: HTMLDivElement
    input: HTMLInputElement
    submit: HTMLButtonElement & {image: HTMLImageElement}
    
}

export namespace WebsocketDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): WebsocketDemoBinding {
       return inflateHtmlFile(variants, ["items", "input"], {submit: ["image"]}, {}) as WebsocketDemoBinding
   }
}

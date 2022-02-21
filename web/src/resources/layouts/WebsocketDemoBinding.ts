import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './websocket_demo.html'


//! Declares com.lightningkite.rxexample.databinding.WebsocketDemoBinding
export interface WebsocketDemoBinding {
    root: HTMLElement
    items: HTMLDivElement
    input: HTMLInputElement
    submit: HTMLButtonElement
    
    
}

export namespace WebsocketDemoBinding {
   export function inflate(): WebsocketDemoBinding {
       return inflateHtmlFile(html, ["items", "input", "submit"], {}, {}) as WebsocketDemoBinding
   }
}

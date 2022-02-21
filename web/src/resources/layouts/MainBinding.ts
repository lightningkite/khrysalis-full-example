import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './main.html'


//! Declares com.lightningkite.rxexample.databinding.MainBinding
export interface MainBinding {
    root: HTMLElement
    mainBack: HTMLButtonElement
    title: HTMLDivElement
    topBar: HTMLDivElement
    mainContent: HTMLDivElement
    bottom0: HTMLDivElement
    
    
}

export namespace MainBinding {
   export function inflate(): MainBinding {
       return inflateHtmlFile(html, ["mainBack", "title", "topBar", "mainContent", "bottom0"], {}, {}) as MainBinding
   }
}

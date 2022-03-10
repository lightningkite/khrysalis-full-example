import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './main.html'


//! Declares com.lightningkite.rxexample.databinding.MainBinding
export interface MainBinding {
    root: HTMLElement
    title: HTMLDivElement
    topBar: HTMLDivElement
    mainContent: HTMLDivElement
    bottom0: HTMLDivElement
    mainBack: HTMLButtonElement & {image: HTMLImageElement}
    
}

export namespace MainBinding {
   export function inflate(): MainBinding {
       return inflateHtmlFile(html, ["title", "topBar", "mainContent", "bottom0"], {mainBack: ["image"]}, {}) as MainBinding
   }
}

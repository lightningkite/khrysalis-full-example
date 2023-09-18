import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './main.html'


//! Declares com.lightningkite.rxexample.databinding.MainBinding
export interface MainBinding {
    root: HTMLElement
    title: HTMLDivElement
    topBar: HTMLDivElement
    mainContent: HTMLDivElement
    mainBack: HTMLButtonElement & {image: HTMLImageElement}
    
}

export namespace MainBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): MainBinding {
       return inflateHtmlFile(variants, ["title", "topBar", "mainContent"], {mainBack: ["image"]}, {}) as MainBinding
   }
}

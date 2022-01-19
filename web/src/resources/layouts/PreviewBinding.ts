import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './preview.html'

//! Declares com.lightningkite.rxexample.databinding.PreviewBinding
export interface PreviewBinding {
    root: HTMLElement
    viewName: HTMLDivElement
    pager: {root: HTMLDivElement, container: HTMLDivElement, previous: HTMLButtonElement, next: HTMLButtonElement}
}

export namespace PreviewBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["viewName"], {pager: ["root", "container", "previous", "next"]}) as PreviewBinding
   }
}

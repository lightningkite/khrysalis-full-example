import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './controls_demo.html'


//! Declares com.lightningkite.rxexample.databinding.ControlsDemoBinding
export interface ControlsDemoBinding {
    root: HTMLElement
    editableText: HTMLInputElement
    numberText: HTMLInputElement
    editableAutoText: HTMLInputElement
    editableTextCopy: HTMLDivElement
    editableTextBig: HTMLTextAreaElement
    spinner: HTMLSelectElement
    
    
}

export namespace ControlsDemoBinding {
   export function inflate(): ControlsDemoBinding {
       return inflateHtmlFile(html, ["editableText", "numberText", "editableAutoText", "editableTextCopy", "editableTextBig", "spinner"], {}, {}) as ControlsDemoBinding
   }
}

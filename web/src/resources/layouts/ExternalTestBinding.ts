import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './external_test.html'


//! Declares com.lightningkite.rxexample.databinding.ExternalTestBinding
export interface ExternalTestBinding {
    root: HTMLElement
    openMap: HTMLButtonElement
    openWeb: HTMLButtonElement
    openEvent: HTMLButtonElement
    scrollView: HTMLDivElement
    
    
}

export namespace ExternalTestBinding {
   export function inflate(): ExternalTestBinding {
       return inflateHtmlFile(html, ["openMap", "openWeb", "openEvent", "scrollView"], {}, {}) as ExternalTestBinding
   }
}

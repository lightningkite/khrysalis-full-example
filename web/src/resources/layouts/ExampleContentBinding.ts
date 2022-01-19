import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './example_content.html'

//! Declares com.lightningkite.rxexample.databinding.ExampleContentBinding
export interface ExampleContentBinding {
    root: HTMLElement
    exampleContentNumber: HTMLDivElement
    exampleContentIncrement: HTMLButtonElement
    chainedNumber: HTMLDivElement
    chainedIncrement: HTMLButtonElement
    scrollToTop: HTMLButtonElement
    scrollView: HTMLDivElement
    
}

export namespace ExampleContentBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["exampleContentNumber", "exampleContentIncrement", "chainedNumber", "chainedIncrement", "scrollToTop", "scrollView"], {}) as ExampleContentBinding
   }
}

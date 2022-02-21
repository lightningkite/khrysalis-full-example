import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './example_content.html'
import { ComponentTextBinding } from './ComponentTextBinding' 

//! Declares com.lightningkite.rxexample.databinding.ExampleContentBinding
export interface ExampleContentBinding {
    root: HTMLElement
    exampleContentNumber: HTMLDivElement
    exampleContentIncrement: HTMLButtonElement
    chainedNumber: HTMLDivElement
    chainedIncrement: HTMLButtonElement
    scrollToTop: HTMLButtonElement
    scrollView: HTMLDivElement
    
    sub: ComponentTextBinding
}

export namespace ExampleContentBinding {
   export function inflate(): ExampleContentBinding {
       return inflateHtmlFile(html, ["exampleContentNumber", "exampleContentIncrement", "chainedNumber", "chainedIncrement", "scrollToTop", "scrollView"], {}, {sub: ComponentTextBinding.inflate}) as ExampleContentBinding
   }
}

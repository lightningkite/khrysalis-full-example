import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './example_content.html'
import { ComponentTextBinding } from './ComponentTextBinding' 

//! Declares com.lightningkite.rxexample.databinding.ExampleContentBinding
export interface ExampleContentBinding {
    root: HTMLElement
    incrementingNumber: HTMLDivElement
    exampleContentNumber: HTMLDivElement
    exampleContentIncrement: HTMLButtonElement
    chainedNumber: HTMLDivElement
    chainedIncrement: HTMLButtonElement
    scrollToTop: HTMLButtonElement
    scrollView: HTMLDivElement
    sub: ComponentTextBinding
}

export namespace ExampleContentBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): ExampleContentBinding {
       return inflateHtmlFile(variants, ["incrementingNumber", "exampleContentNumber", "exampleContentIncrement", "chainedNumber", "chainedIncrement", "scrollToTop", "scrollView"], {}, {sub: ComponentTextBinding.inflate}) as ExampleContentBinding
   }
}

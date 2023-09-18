import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './slider_demo.html'


//! Declares com.lightningkite.rxexample.databinding.SliderDemoBinding
export interface SliderDemoBinding {
    root: HTMLElement
    slider: HTMLInputElement
    valueDisplay: HTMLDivElement
    progress: HTMLProgressElement
    rating: HTMLInputElement
    ratingDisplayStars: HTMLInputElement
    ratingDisplayStarsSmall: HTMLInputElement
    ratingDisplayNumber: HTMLDivElement
    ratingFloat: HTMLInputElement
    ratingDisplayStarsFloat: HTMLInputElement
    ratingDisplayStarsSmallFloat: HTMLInputElement
    ratingDisplayNumberFloat: HTMLDivElement
    
}

export namespace SliderDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): SliderDemoBinding {
       return inflateHtmlFile(variants, ["slider", "valueDisplay", "progress", "rating", "ratingDisplayStars", "ratingDisplayStarsSmall", "ratingDisplayNumber", "ratingFloat", "ratingDisplayStarsFloat", "ratingDisplayStarsSmallFloat", "ratingDisplayNumberFloat"], {}, {}) as SliderDemoBinding
   }
}

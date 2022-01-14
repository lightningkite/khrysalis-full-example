import {inflateHtmlFile} from "android-xml-runtime";
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
   export function inflate() {
       return inflateHtmlFile(html, ["slider", "valueDisplay", "progress", "rating", "ratingDisplayStars", "ratingDisplayStarsSmall", "ratingDisplayNumber", "ratingFloat", "ratingDisplayStarsFloat", "ratingDisplayStarsSmallFloat", "ratingDisplayNumberFloat"], {}) as SliderDemoBinding
   }
}
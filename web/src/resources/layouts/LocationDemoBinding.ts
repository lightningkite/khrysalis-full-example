import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './location_demo.html'


//! Declares com.lightningkite.rxexample.databinding.LocationDemoBinding
export interface LocationDemoBinding {
    root: HTMLElement
    getLocation: HTMLButtonElement
    locationDisplay: HTMLDivElement
    
}

export namespace LocationDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): LocationDemoBinding {
       return inflateHtmlFile(variants, ["getLocation", "locationDisplay"], {}, {}) as LocationDemoBinding
   }
}

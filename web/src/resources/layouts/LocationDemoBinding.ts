import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './location_demo.html'

//! Declares com.lightningkite.rxexample.databinding.LocationDemoBinding
export interface LocationDemoBinding {
    root: HTMLElement
    getLocation: HTMLButtonElement
    locationDisplay: HTMLDivElement
    
}

export namespace LocationDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["getLocation", "locationDisplay"], {}) as LocationDemoBinding
   }
}

import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './view_pager_demo.html'


//! Declares com.lightningkite.rxexample.databinding.ViewPagerDemoBinding
export interface ViewPagerDemoBinding {
    root: HTMLElement
    viewPager: HTMLDivElement & {container: HTMLDivElement, previous: HTMLButtonElement, next: HTMLButtonElement}
    
}

export namespace ViewPagerDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined
}]
   export function inflate(): ViewPagerDemoBinding {
       return inflateHtmlFile(variants, [], {viewPager: ["container", "previous", "next"]}, {}) as ViewPagerDemoBinding
   }
}

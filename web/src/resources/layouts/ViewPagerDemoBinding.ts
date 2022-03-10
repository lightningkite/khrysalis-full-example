import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './view_pager_demo.html'


//! Declares com.lightningkite.rxexample.databinding.ViewPagerDemoBinding
export interface ViewPagerDemoBinding {
    root: HTMLElement
    
    viewPager: HTMLDivElement & {container: HTMLDivElement, previous: HTMLButtonElement, next: HTMLButtonElement}
    
}

export namespace ViewPagerDemoBinding {
   export function inflate(): ViewPagerDemoBinding {
       return inflateHtmlFile(html, [], {viewPager: ["container", "previous", "next"]}, {}) as ViewPagerDemoBinding
   }
}

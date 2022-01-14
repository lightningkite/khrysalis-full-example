import {inflateHtmlFile} from "android-xml-runtime";
import html from './view_pager_demo.html'

//! Declares com.lightningkite.rxexample.databinding.ViewPagerDemoBinding
export interface ViewPagerDemoBinding {
    root: HTMLElement
    
    viewPager: {root: HTMLDivElement, container: HTMLDivElement, previous: HTMLButtonElement, next: HTMLButtonElement}
}

export namespace ViewPagerDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, [], {viewPager: ["root", "container", "previous", "next"]}) as ViewPagerDemoBinding
   }
}

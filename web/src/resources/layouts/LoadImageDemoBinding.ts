import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './load_image_demo.html'


//! Declares com.lightningkite.rxexample.databinding.LoadImageDemoBinding
export interface LoadImageDemoBinding {
    root: HTMLElement
    gallery: HTMLButtonElement
    galleryMultiple: HTMLButtonElement
    camera: HTMLButtonElement
    loremPixel: HTMLButtonElement
    image: HTMLImageElement
    checkCanUpload: HTMLButtonElement
    canUpload: HTMLDivElement
    
}

export namespace LoadImageDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined
}]
   export function inflate(): LoadImageDemoBinding {
       return inflateHtmlFile(variants, ["gallery", "galleryMultiple", "camera", "loremPixel", "image", "checkCanUpload", "canUpload"], {}, {}) as LoadImageDemoBinding
   }
}

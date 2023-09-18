import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './video_demo.html'


//! Declares com.lightningkite.rxexample.databinding.VideoDemoBinding
export interface VideoDemoBinding {
    root: HTMLElement
    video: HTMLVideoElement
    gallery: HTMLButtonElement
    camera: HTMLButtonElement
    galleryMulti: HTMLButtonElement
    
}

export namespace VideoDemoBinding {
   const variants = [{
    html: html,
    widerThan: undefined,
    tallerThan: undefined
}]
   export function inflate(): VideoDemoBinding {
       return inflateHtmlFile(variants, ["video", "gallery", "camera", "galleryMulti"], {}, {}) as VideoDemoBinding
   }
}

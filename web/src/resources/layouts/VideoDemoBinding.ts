import {inflateHtmlFile} from "@lightningkite/android-xml-runtime";
import html from './video_demo.html'

//! Declares com.lightningkite.rxexample.databinding.VideoDemoBinding
export interface VideoDemoBinding {
    root: HTMLElement
    video: HTMLVideoElement
    play: HTMLButtonElement
    gallery: HTMLButtonElement
    camera: HTMLButtonElement
    galleryMulti: HTMLButtonElement
    
}

export namespace VideoDemoBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["video", "play", "gallery", "camera", "galleryMulti"], {}) as VideoDemoBinding
   }
}

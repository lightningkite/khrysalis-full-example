// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { VideoDemoBinding } from '../resources/layouts/VideoDemoBinding'
import { runOrNull } from '@lightningkite/khrysalis-runtime'
import { Video, ViewGenerator, onThrottledEventDo, openFile, openFiles, subscribeAutoDispose, videoElementSet } from '@lightningkite/rxjs-plus'
import { BehaviorSubject } from 'rxjs'

//! Declares com.lightningkite.rxexample.vg.VideoDemoVG
export class VideoDemoVG implements ViewGenerator {
    public static implementsViewGenerator = true;
    public constructor() {
        this.currentVideo = new BehaviorSubject<(Video | null)>({ url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" });
        this.timesPlayPressed = new BehaviorSubject<number>(0);
    }
    
    
    
    //! Declares com.lightningkite.rxexample.vg.VideoDemoVG.titleString
    public get titleString(): string { return "Video Demo"; }
    
    
    public readonly currentVideo: BehaviorSubject<(Video | null)>;
    public readonly timesPlayPressed: BehaviorSubject<number>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = VideoDemoBinding.inflate();
        const view = xml.root;
        
        //--- Set Up xml.video
        this.currentVideo.pipe(subscribeAutoDispose(xml.video, (this_: HTMLVideoElement, it: (Video | null)): void => {
            if ((it !== null)) { videoElementSet(xml.video, it!!) }
        }));
        
        //--- Set Up xml.play (overwritten on flow generation)
        onThrottledEventDo(xml.play, 'click', (): void => {
            this.playClick();
        });
        
        //--- Set Up xml.gallery
        onThrottledEventDo(xml.gallery, 'click', (): void => {
            openFile("video/*").subscribe((it: File): void => {
                this.currentVideo.next({ uri: it });
            }, undefined);
        });
        
        //--- Set Up xml.camera
        onThrottledEventDo(xml.camera, 'click', (): void => {
            openFile("video/*", undefined).subscribe((it: File): void => {
                this.currentVideo.next({ uri: it });
            }, undefined);
        });
        
        //--- Set Up xml.galleryMulti
        onThrottledEventDo(xml.galleryMulti, 'click', (): void => {
            openFiles("video/*").subscribe((it: Array<File>): void => {
                const it_29 = (it[0] ?? null);
                if (it_29 !== null) {
                    this.currentVideo.next({ uri: it_29 });
                }
            }, undefined);
        });
        
        //--- Generate End (overwritten on flow generation)
        
        return view;
    }
    
    //--- Init
    
    
    
    //--- Actions
    
    public playClick(): void {
        this.timesPlayPressed.next(this.timesPlayPressed.value + 1);
        switch(this.timesPlayPressed.value % 3) {
            case 0: {
                this.currentVideo.next({ url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" })
                break;
            }
            case 1: {
                this.currentVideo.next({ url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" })
                break;
            }
            case 2: {
                this.currentVideo.next(null)
                break;
            }
        }
        
    }
    
    //--- Action galleryClick
    
    public cameraClick(): void {
    }
    
    public galleryMultiClick(): void {
    }
    
    //--- Body End
}

// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { LoadImageDemoBinding } from '../resources/layouts/LoadImageDemoBinding'
import { HasTitle } from './HasTitle'
import { printStackTrace, runOrNull } from '@lightningkite/khrysalis-runtime'
import { Image, ViewGenerator, elementRemoved, imageElementSet, imageToBody, onThrottledEventDo, openFile, openFiles, subscribeAutoDispose } from '@lightningkite/rxjs-plus'
import { BehaviorSubject, map } from 'rxjs'

//! Declares com.lightningkite.rxexample.vg.LoadImageDemoVG
export class LoadImageDemoVG implements ViewGenerator, HasTitle {
    public static implementsViewGenerator = true;
    public static implementsHasTitle = true;
    public constructor() {
        this.canUpload = new BehaviorSubject<(boolean | null)>(null);
        this.currentImage = new BehaviorSubject<(Image | null)>(null);
    }
    
    //! Declares com.lightningkite.rxexample.vg.LoadImageDemoVG.title
    public get title(): string { return "Load Image Demo"; }
    
    
    public readonly canUpload: BehaviorSubject<(boolean | null)>;
    public readonly currentImage: BehaviorSubject<(Image | null)>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = LoadImageDemoBinding.inflate();
        const view = xml.root;
        
        elementRemoved(view).parts.push(this.currentImage.subscribe((it: (Image | null)): void => {
            this.canUpload.next(null);
        }, undefined, undefined));
        
        this.currentImage.pipe(subscribeAutoDispose(xml.image, (this_: HTMLImageElement, it: (Image | null)): void => {
            imageElementSet(xml.image, it);
        }));
        onThrottledEventDo(xml.camera, 'click', (): void => {
            openFile("image/*", undefined).subscribe((url: File): void => {
                this.currentImage.next({ uri: url });
            }, undefined);
        });
        onThrottledEventDo(xml.galleryMultiple, 'click', (): void => {
            openFiles("image/*").subscribe((urls: Array<File>): void => {
                const url_25 = (urls[0] ?? null);
                if (url_25 !== null) {
                    this.currentImage.next({ uri: url_25 });
                }
            }, undefined);
        });
        onThrottledEventDo(xml.gallery, 'click', (): void => {
            openFile("image/*").subscribe((url: File): void => {
                this.currentImage.next({ uri: url });
            }, undefined);
        });
        onThrottledEventDo(xml.loremPixel, 'click', (): void => {
            this.currentImage.next({ url: "https://picsum.photos/200" });
        });
        onThrottledEventDo(xml.checkCanUpload, 'click', (): void => {
            const i_44 = this.currentImage.value;
            if (i_44 !== null) {
                imageToBody(i_44, undefined, undefined).subscribe((it: Blob): void => {
                        this.canUpload.next(true);
                    }, (it: any): void => {
                        printStackTrace(it);
                        this.canUpload.next(false);
                });
            }
        });
        this.canUpload.pipe(map((it: (boolean | null)): string => (it === null ? "Not checked" : it === true ? "Good to go!" : "FAILED!!!"))).pipe(subscribeAutoDispose(xml.canUpload, "textContent"));
        return view;
    }
}

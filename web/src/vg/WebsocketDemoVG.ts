// File: /home/jivie/Projects/khrysalis-full-example/android/src/main/java/com/lightningkite/rxexample/vg/WebsocketDemoVG.kt
// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { WebsocketDemoBinding } from '../resources/layouts/WebsocketDemoBinding'
import { map, publishReplay, refCount, retry, switchMap, take } from 'rxjs/operators'
import { BehaviorSubject, Observable, ObservableInput, concat, of } from 'rxjs'
import { HttpClient, ViewGenerator, WebSocketFrame, WebSocketInterface, bind, elementRemoved, onThrottledEventDo, showIn, subscribeAutoDispose } from '@lightningkite/rxjs-plus'
import { ComponentTextBinding } from '../resources/layouts/ComponentTextBinding'

//! Declares com.lightningkite.rxexample.vg.WebsocketDemoVG
export class WebsocketDemoVG implements ViewGenerator {
    public static implementsViewGenerator = true;
    public constructor() {
        this.socket = HttpClient.INSTANCE.webSocket("wss://echo.websocket.org").pipe(publishReplay(1)).pipe(refCount());
        this.text = new BehaviorSubject("");
    }
    
    
    
    //! Declares com.lightningkite.rxexample.vg.WebsocketDemoVG.titleString
    public get titleString(): string { return "Websocket Demo"; }
    
    
    public readonly socket: Observable<WebSocketInterface>;
    public readonly text: BehaviorSubject<string>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = WebsocketDemoBinding.inflate();
        const view = xml.root;
        
        //--- Set Up xml.items
        const itemsList = ([] as Array<WebSocketFrame>);
        concat(of(itemsList), this.socket.pipe(switchMap((it: WebSocketInterface): ObservableInput<WebSocketFrame> => it.read)).pipe(map((it: WebSocketFrame): Array<WebSocketFrame> => {
            console.log("Adding item");
            itemsList.push(it);
            while (itemsList.length > 20) {
                itemsList.splice(0, 1)[0];
            }
            return itemsList as Array<WebSocketFrame>;
        }))).pipe(retry()).pipe(showIn(xml.items, (observable: Observable<WebSocketFrame>): HTMLElement => {
            //--- Make Subview For xml.items (overwritten on flow generation)
            const cellXml = ComponentTextBinding.inflate();
            const cellView = cellXml.root;
            
            //--- Set Up cellXml.label (overwritten on flow generation)
            of("Some Text").pipe(subscribeAutoDispose(cellXml.label, "textContent"));
            //--- End Make Subview For xml.items (overwritten on flow generation)
            return cellView;
        }));
        
        //--- Set Up xml.input
        this.text.pipe(bind(xml.input, "value", "input"));
        
        //--- Set Up xml.submit
        onThrottledEventDo(xml.submit, 'click', (): void => {
            elementRemoved(xml.submit).parts.push(this.socket.pipe(take(1)).subscribe((it: WebSocketInterface): void => {
                it.write.next({ text: this.text.value });
            }, undefined, undefined));
        });
        
        //--- Generate End (overwritten on flow generation)
        
        return view;
    }
    
    //--- Init
    
    
    
    //--- Actions
    
    
    public submitClick(): void {
    }
    
    //--- Body End
}

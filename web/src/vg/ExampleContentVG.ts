// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { ExampleContentBinding } from '../resources/layouts/ExampleContentBinding'
import { HasTitle } from './HasTitle'
import { ViewGenerator, elementRemoved, onThrottledEventDo, subscribeAutoDispose } from '@lightningkite/rxjs-plus'
import { BehaviorSubject, Observable, interval } from 'rxjs'
import { map, mergeMap, tap } from 'rxjs/operators'

//! Declares com.lightningkite.rxexample.vg.ExampleContentVG
export class ExampleContentVG implements ViewGenerator, HasTitle {
    public static implementsViewGenerator = true;
    public static implementsHasTitle = true;
    public constructor() {
        this._number = new BehaviorSubject(0);
        this.chained = new BehaviorSubject(new BehaviorSubject(0));
    }
    
    //! Declares com.lightningkite.rxexample.vg.ExampleContentVG.title
    public get title(): string { return "Example Content"; }
    
    
    public readonly _number: BehaviorSubject<number>;
    public readonly chained: BehaviorSubject<BehaviorSubject<number>>;
    
    public increment(): void {
        const temp2 = this._number;
        temp2.next(temp2.value + 1);
    }
    
    public generate(dependency: Window): HTMLElement {
        const xml = ExampleContentBinding.inflate();
        const view = xml.root;
        
        elementRemoved(xml.incrementingNumber).parts.push(interval(1000).pipe(tap({ unsubscribe: (): void => {
                            console.log("KILLING LISTENER");
            } })).subscribe((it: number): void => {
                    console.log("HEY LISTEN");
                    xml.incrementingNumber.textContent;
                }, undefined, (): void => {
                    xml.incrementingNumber.textContent;
        }));
        
        onThrottledEventDo(xml.exampleContentIncrement, 'click', (): void => {
            this.increment();
        });
        this._number.pipe(map((it: number): string => (it.toString()))).pipe(subscribeAutoDispose(xml.exampleContentNumber, "textContent"));
        
        onThrottledEventDo(xml.chainedIncrement, 'click', (): void => {
            this.chained.value.next(this.chained.value.value + 1);
        });
        this.chained.pipe(mergeMap((it: BehaviorSubject<number>): Observable<number> => (it))).pipe(map((it: number): string => (it.toString()))).pipe(subscribeAutoDispose(xml.chainedNumber, "textContent"));
        
        onThrottledEventDo(xml.scrollToTop, 'click', (): void => {
            xml.scrollView.scroll(0, 0);
        });
        return view;
    }
}

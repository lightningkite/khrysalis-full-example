// File: /home/jivie/Projects/khrysalis-full-example/android/src/main/java/com/lightningkite/rxexample/vg/ExampleContentVG.kt
// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { ViewGenerator, onThrottledEventDo, subscribeAutoDispose } from 'rxjs-plus'
import { BehaviorSubject, ObservableInput } from 'rxjs'
import { ExampleContentBinding } from '../resources/layouts/ExampleContentBinding'
import { map, mergeMap } from 'rxjs/operators'

//! Declares com.lightningkite.rxexample.vg.ExampleContentVG
export class ExampleContentVG implements ViewGenerator {
    public static implementsViewGenerator = true;
    public constructor() {
        this._number = new BehaviorSubject(0);
        this.chained = new BehaviorSubject(new BehaviorSubject(0));
    }
    
    //! Declares com.lightningkite.rxexample.vg.ExampleContentVG.titleString
    public get titleString(): string { return "Example Content"; }
    
    
    public readonly _number: BehaviorSubject<number>;
    public readonly chained: BehaviorSubject<BehaviorSubject<number>>;
    
    public increment(): void {
        const temp66 = this._number;
        temp66.next(temp66.value + 1);
    }
    
    public generate(dependency: Window): HTMLElement {
        const xml = ExampleContentBinding.inflate();
        const view = xml.root;
        onThrottledEventDo(xml.exampleContentIncrement, 'click', (): void => {
            this.increment();
        });
        this._number.pipe(map((it: number): string => it.toString())).pipe(subscribeAutoDispose(xml.exampleContentNumber, "textContent"));
        onThrottledEventDo(xml.chainedIncrement, 'click', (): void => {
            this.chained.value.next(this.chained.value.value + 1);
        });
        this.chained.pipe(mergeMap((it: BehaviorSubject<number>): ObservableInput<number> => it)).pipe(map((it: number): string => it.toString())).pipe(subscribeAutoDispose(xml.chainedNumber, "textContent"));
        onThrottledEventDo(xml.scrollToTop, 'click', (): void => {
            xml.scrollView.scroll(0, 0);
        });
        return view;
    }
}
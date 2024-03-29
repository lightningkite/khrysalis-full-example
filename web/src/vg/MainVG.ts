// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { helloWorld } from '../actuals'
import { MainBinding } from '../resources/layouts/MainBinding'
import { ExampleContentVG } from './ExampleContentVG'
import { HasTitle } from './HasTitle'
import { SelectDemoVG } from './SelectDemoVG'
import { tryCastInterface } from '@lightningkite/khrysalis-runtime'
import { EntryPoint, HasBackActionDefaults, StackSubject, ViewGenerator, onThrottledEventDo, showInSwapCustom, subscribeAutoDispose, viewVisible, xStackPop, xStackPush } from '@lightningkite/rxjs-plus'
import { takeLastOr } from 'iter-tools-es'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

//! Declares com.lightningkite.rxexample.vg.MainVG
export class MainVG implements ViewGenerator, HasTitle, EntryPoint {
    public static implementsViewGenerator = true;
    public static implementsHasTitle = true;
    public static implementsEntryPoint = true;
    public static implementsHasBackAction = true;
    public constructor() {
        this.stack = new BehaviorSubject(([] as Array<ViewGenerator>));
        this.shouldBackBeShown = this.stack.pipe(map((it: Array<ViewGenerator>): boolean => (it.length > 1)));
        xStackPush(this.stack, new SelectDemoVG(this.stack));
    }
    
    //! Declares com.lightningkite.rxexample.vg.MainVG.title
    public get title(): string { return "Main"; }
    
    
    public readonly stack: StackSubject<ViewGenerator>;
    //! Declares com.lightningkite.rxexample.vg.MainVG.mainStack
    public get mainStack(): (StackSubject<ViewGenerator> | null) { return this.stack; }
    
    public readonly shouldBackBeShown: Observable<boolean>;
    
    
    
    public generate(dependency: Window): HTMLElement {
        const xml = MainBinding.inflate();
        const view = xml.root;
        
        helloWorld();
        
        this.stack.pipe(showInSwapCustom(xml.mainContent, dependency, undefined));
        
        this.stack.pipe(map((it: Array<ViewGenerator>): string => (((): (string | null) => {
            const temp14 = ((tryCastInterface<HasTitle>(takeLastOr(null, it)!, "HasTitle"))?.title ?? null);
            if(temp14 === null) { return null }
            return temp14
        })() ?? ""))).pipe(subscribeAutoDispose(xml.title, "textContent"));
        
        this.shouldBackBeShown.pipe(subscribeAutoDispose(xml.mainBack, viewVisible));
        
        onThrottledEventDo(xml.mainBack, 'click', (): void => {
            xStackPop(this.stack);
        });
        
        return view;
    }
    
    public handleDeepLink(schema: string, host: string, path: string, params: Map<string, string>): void {
        xStackPush(this.stack, new ExampleContentVG());
    }
    
    public onBackPressed(): boolean { return HasBackActionDefaults.onBackPressed(this); }
}

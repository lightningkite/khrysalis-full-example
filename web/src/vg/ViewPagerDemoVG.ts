// File: /home/jivie/Projects/khrysalis-full-example/android/src/main/java/com/lightningkite/rxexample/vg/ViewPagerDemoVG.kt
// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { ComponentTestBinding } from '../resources/layouts/ComponentTestBinding'
import { BehaviorSubject, of } from 'rxjs'
import { ViewPagerDemoBinding } from '../resources/layouts/ViewPagerDemoBinding'
import { StackSubject, ViewGenerator, showInPager } from '@lightningkite/rxjs-plus'

//! Declares com.lightningkite.rxexample.vg.ViewPagerDemoVG
export class ViewPagerDemoVG implements ViewGenerator {
    public static implementsViewGenerator = true;
    public readonly stack: StackSubject<ViewGenerator>;
    public constructor(stack: StackSubject<ViewGenerator>) {
        this.stack = stack;
        this.items = ["First", "Second", "Third"];
        this.selectedIndex = new BehaviorSubject(0);
    }
    
    //! Declares com.lightningkite.rxexample.vg.ViewPagerDemoVG.titleString
    public get titleString(): string { return "View Pager Demo"; }
    
    
    public readonly items: Array<string>;
    public readonly selectedIndex: BehaviorSubject<number>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = ViewPagerDemoBinding.inflate();
        const view = xml.root;
        
        of(this.items).pipe(showInPager(xml.viewPager, this.selectedIndex, (it: string): HTMLElement => {
            const xml = ComponentTestBinding.inflate();
            const view = xml.root;
            xml.label.textContent = it;
            return view;
        }));
        
        return view;
    }
}

// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { ComponentTestBinding } from '../resources/layouts/ComponentTestBinding'
import { ViewPagerDemoBinding } from '../resources/layouts/ViewPagerDemoBinding'
import { HasTitle } from './HasTitle'
import { StackSubject, ViewGenerator, showInPager, subscribeAutoDispose } from '@lightningkite/rxjs-plus'
import { BehaviorSubject, Observable, of } from 'rxjs'

//! Declares com.lightningkite.rxexample.vg.ViewPagerDemoVG
export class ViewPagerDemoVG implements ViewGenerator, HasTitle {
    public static implementsViewGenerator = true;
    public static implementsHasTitle = true;
    public constructor(public readonly stack: StackSubject<ViewGenerator>) {
        this.selectedIndex = new BehaviorSubject(0);
    }
    
    //! Declares com.lightningkite.rxexample.vg.ViewPagerDemoVG.title
    public get title(): string { return "View Pager Demo"; }
    
    
    public readonly selectedIndex: BehaviorSubject<number>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = ViewPagerDemoBinding.inflate();
        const view = xml.root;
        
        of(["First", "Second", "Third"]).pipe(showInPager(xml.viewPager, this.selectedIndex, (it: Observable<string>): HTMLElement => {
            const xml = ComponentTestBinding.inflate();
            const view = xml.root;
            it.pipe(subscribeAutoDispose(xml.label, "textContent"));
            return view;
        }));
        
        return view;
    }
}

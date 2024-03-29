// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { LoginDemoBinding } from '../resources/layouts/LoginDemoBinding'
import { ExampleContentVG } from './ExampleContentVG'
import { HasTitle } from './HasTitle'
import { xCharSequenceIsBlank } from '@lightningkite/khrysalis-runtime'
import { ViewGenerator, bind, hasClass, onThrottledEventDo, showDialog, subscribeAutoDispose, xStackPush } from '@lightningkite/rxjs-plus'
import { BehaviorSubject } from 'rxjs'

//! Declares com.lightningkite.rxexample.vg.LoginDemoVG
export class LoginDemoVG implements ViewGenerator, HasTitle {
    public static implementsViewGenerator = true;
    public static implementsHasTitle = true;
    public constructor(public readonly stack: BehaviorSubject<Array<ViewGenerator>>) {
        this.username = new BehaviorSubject("");
        this.password = new BehaviorSubject("");
        this.verifyPassword = new BehaviorSubject("");
        this.agree = new BehaviorSubject(false);
        this.loading = new BehaviorSubject(false);
    }
    
    //! Declares com.lightningkite.rxexample.vg.LoginDemoVG.title
    public get title(): string { return "Log In Demo"; }
    
    
    public readonly username: BehaviorSubject<string>;
    public readonly password: BehaviorSubject<string>;
    public readonly verifyPassword: BehaviorSubject<string>;
    public readonly agree: BehaviorSubject<boolean>;
    public readonly loading: BehaviorSubject<boolean>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = LoginDemoBinding.inflate();
        const view = xml.root;
        
        this.username.pipe(bind(xml.username, "value", "input"));
        this.password.pipe(bind(xml.password, "value", "input"));
        this.verifyPassword.pipe(bind(xml.verifyPassword, "value", "input"));
        this.agree.pipe(bind(xml.agree.input, "checked", "input"));
        this.loading.pipe(subscribeAutoDispose(xml.submitLoading, hasClass("loading")));
        onThrottledEventDo(xml.submit, 'click', (): void => {
            this.submit();
        });
        
        return view;
    }
    
    public submit(): void {
        if (xCharSequenceIsBlank(this.username.value)) {
            showDialog("Username cannot be blank");
            return;
        }
        if (xCharSequenceIsBlank(this.password.value)) {
            showDialog("Password cannot be blank");
            return;
        }
        if (xCharSequenceIsBlank(this.verifyPassword.value)) {
            showDialog("Verify Password cannot be blank");
            return;
        }
        if (!(this.password.value === this.verifyPassword.value)) {
            showDialog("Passwords don't match");
            return;
        }
        if ((!this.agree.value)) {
            showDialog("You must agree to the terms");
            return;
        }
        console.log("Submit!");
        this.loading.next(true);
        setTimeout((): void => {
            this.loading.next(false);
            xStackPush(this.stack, new ExampleContentVG());
        }, 1000);
    }
}

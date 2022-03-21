// Package: com.lightningkite.rxexample
// Generated by Khrysalis - this file will be overwritten.
import { ZoneId } from '@js-joda/core'
import { equalBy, reduceOr } from '@lightningkite/khrysalis-runtime'
import { HttpBody, mapCall, replaceWithStyles, subjectIsEqualTo, viewExists, withWrite } from '@lightningkite/rxjs-plus'
import { first } from 'iter-tools-es'
import { BehaviorSubject, Subject, combineLatestWith, of } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

//! Declares com.lightningkite.rxexample.test
export function test(old: HTMLElement, _new: HTMLDivElement, layout: HTMLElement, response: Response): void {
    const regex = new RegExp("asdf");
    const a = regex.test("asdf");
    const b = "asdf".toUpperCase();
    const c = 'd'.toUpperCase();
    const d = reduceOr((acc: number, i: number): number => (acc + i), [1, 2, 3]);
    //    val e = mapOf<Int, Int>(1 to 2, 3 to 4) - Pair(3, 4)
    const f = first(new Set([...new Map([[1, 2]]).entries()]))!;
    const g = (null !== null);
    console.log(ZoneId.systemDefault().id());
    replaceWithStyles(old, _new);
    viewExists.set(old, false);
    viewExists.set(old, true);
    old.style.visibility = false ? "visible" : "";
    old.style.visibility = true ? "visible" : "";
    layout.appendChild(old);
    console.log(response.status);
    HttpBody.multipart(["asdf", "fdsa"], ["asdf", new Blob(["asdf"], { type: "text/plain" }), "fdsa"]);
    const h = of(1).pipe(withWrite((it: number): void => {
        console.log("write");
    }));
    const i = of(1).pipe(combineLatestWith(of(2)), mapCall((a: number, b: number): number => (a + b)));
    const j = new Subject().pipe(subjectIsEqualTo(2));
    Object.assign(_new.style, { display: "grid", gridTemplateColumns: `repeat(${3}, 1fr)`, alignContent: "start", justifyContent: "start" });
    const k = of(1).pipe(distinctUntilChanged(equalBy((it: number): number => (it / 2))));
    new BehaviorSubject<(number | null)>(1).next(null);
    throw new Error(undefined);
    throw new Error("asdf");
}
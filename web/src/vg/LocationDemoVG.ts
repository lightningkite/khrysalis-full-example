// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import { LocationDemoBinding } from '../resources/layouts/LocationDemoBinding'
import { HasTitle } from './HasTitle'
import { ViewGenerator, onThrottledEventDo, requestLocation, subscribeAutoDispose } from '@lightningkite/rxjs-plus'
import { BehaviorSubject, map } from 'rxjs'

//! Declares com.lightningkite.rxexample.vg.LocationDemoVG
export class LocationDemoVG implements ViewGenerator, HasTitle {
    public static implementsViewGenerator = true;
    public static implementsHasTitle = true;
    public constructor() {
        this.locationInfo = new BehaviorSubject<(GeolocationCoordinates | null)>(null);
    }
    
    //! Declares com.lightningkite.rxexample.vg.LocationDemoVG.title
    public get title(): string { return "Location Demo"; }
    
    
    public readonly locationInfo: BehaviorSubject<(GeolocationCoordinates | null)>;
    
    public generate(dependency: Window): HTMLElement {
        const xml = LocationDemoBinding.inflate();
        const view = xml.root;
        onThrottledEventDo(xml.getLocation, 'click', (): void => {
            requestLocation(100.0).subscribe((location: GeolocationCoordinates): void => {
                this.locationInfo.next(location);
            }, undefined);
        });
        this.locationInfo.pipe(map((it: (GeolocationCoordinates | null)): string => {
            if (it !== null) {
                return `${it}`;
            } else {
                return "Nothing yet";
            }
        })).pipe(subscribeAutoDispose(xml.locationDisplay, "textContent"));
        return view;
    }
}

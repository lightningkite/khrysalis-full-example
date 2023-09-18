package com.lightningkite.rxexample.vg

import android.location.Location
import android.view.View
import android.widget.TextView
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.single.subscribe
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess

import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rx.android.onClick
import com.lightningkite.rxexample.databinding.LocationDemoBinding
import com.lightningkite.rx.android.subscribeAutoDispose
import java.util.*

class LocationDemoVG : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("Location Demo")

    val locationInfo = BehaviorSubject<Location?>(null)

    override fun generate(dependency: ActivityAccess): View {
        val xml = LocationDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root
        xml.getLocation.onClick {
            dependency.requestLocation(
                accuracyBetterThanMeters = 100.0
            ).subscribe { location ->
                this.locationInfo.onNext(location)
            }
        }
        locationInfo.map { it ->
            if(it != null){
                return@map "${it}"
            } else {
                return@map "Nothing yet"
            }
        }.subscribeAutoDispose(xml.locationDisplay, TextView::setText)
        return view
    }
}

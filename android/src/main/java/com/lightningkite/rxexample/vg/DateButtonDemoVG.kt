package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.TextView
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.android.bind
import com.lightningkite.rx.toSubjectLocalDate
import com.lightningkite.rx.toSubjectLocalTime

import java.time.format.FormatStyle
import java.time.*
import java.time.format.*
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.DateButtonDemoBinding
import com.lightningkite.rx.android.subscribeAutoDispose

class DateButtonDemoVG() : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("ZonedDateTime Button Demo")

    val date: BehaviorSubject<ZonedDateTime> = BehaviorSubject(ZonedDateTime.now())

    override fun generate(dependency: ActivityAccess): View {
        val xml = DateButtonDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        date
            .map { it -> it.format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.MEDIUM)) }
            .subscribeAutoDispose<Observable<String>, TextView, String>(xml.text, TextView::setText)
        date.toSubjectLocalDate().bind(xml.dateButton)
        date.toSubjectLocalTime().bind(xml.timeButton)

        return view
    }
}

package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.CheckBox
import android.widget.Switch
import android.widget.TextView
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.android.bind
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.ControlsDemoBinding
import com.lightningkite.rx.android.showIn
import com.lightningkite.rx.android.subscribeAutoDispose
import com.lightningkite.rx.toSubjectString

class ControlsDemoVG() : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("Controls Demo")

    val text: BehaviorSubject<String> = BehaviorSubject("")
    val options: BehaviorSubject<List<String>> =
        BehaviorSubject(listOf("Apple", "Banana", "Chili Pepper", "Dragon Fruit"))
    val number: BehaviorSubject<Int> = BehaviorSubject(32)
    val isOn = BehaviorSubject(false)

    override fun generate(dependency: ActivityAccess): View {
        val xml = ControlsDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        isOn
            .bind(xml.check)
            .bind(xml.toggleSwitch)
            .bind(xml.checkAlt)
        number.map { it > 5 }.subscribeAutoDispose(xml.checkAlt, CheckBox::setEnabled)
        number.toSubjectString().bind(xml.numberText)
        text
            .bind(xml.editableText)
            .bind(xml.editableAutoText)
            .bind(xml.editableTextBig)
            .subscribeAutoDispose(xml.editableTextCopy, TextView::setText)
            .subscribeAutoDispose(xml.toggleSwitch, Switch::setText)
        options
            .showIn(xml.editableAutoText, this.text)
            .showIn(xml.spinner, text)

        return view
    }
}

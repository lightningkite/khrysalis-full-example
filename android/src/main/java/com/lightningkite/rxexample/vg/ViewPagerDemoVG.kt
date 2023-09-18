package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.TextView
import com.badoo.reaktive.observable.observableOf
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.viewgenerators.StackSubject
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.ComponentTestBinding
import com.lightningkite.rxexample.databinding.ViewPagerDemoBinding
import com.lightningkite.rx.android.showIn
import com.lightningkite.rx.android.into

class ViewPagerDemoVG(val stack: StackSubject<ViewGenerator>) : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("View Pager Demo")

    val selectedIndex: BehaviorSubject<Int> = BehaviorSubject(0)

    override fun generate(dependency: ActivityAccess): View {
        val xml = ViewPagerDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        observableOf(listOf(
            "First",
            "Second",
            "Third"
        )).showIn(xml.viewPager, selectedIndex) { it ->
            val xml = ComponentTestBinding.inflate(dependency.layoutInflater)
            val view = xml.root
            it.into(xml.label, TextView::setText)
            view
        }

        return view
    }
}

@file:SharedCode
package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.TextView
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.viewgenerators.StackSubject
import com.lightningkite.rx.ValueSubject
import com.lightningkite.rx.android.bind
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.ComponentTestBinding
import com.lightningkite.rxexample.databinding.ViewPagerDemoBinding
import com.lightningkite.rx.android.showIn
import com.lightningkite.khrysalis.SharedCode
import com.lightningkite.rx.android.into
import io.reactivex.rxjava3.core.Observable

class ViewPagerDemoVG(val stack: StackSubject<ViewGenerator>) : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("View Pager Demo")

    val selectedIndex: ValueSubject<Int> = ValueSubject(0)

    override fun generate(dependency: ActivityAccess): View {
        val xml = ViewPagerDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        Observable.just(listOf(
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

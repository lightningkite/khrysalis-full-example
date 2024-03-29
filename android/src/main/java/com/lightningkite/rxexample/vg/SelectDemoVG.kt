@file:SharedCode
package com.lightningkite.rxexample.vg

import android.view.View
import com.jakewharton.rxbinding4.view.clicks
import com.lightningkite.rx.viewgenerators.ActivityAccess
import io.reactivex.rxjava3.core.Observable
import com.lightningkite.rx.viewgenerators.StackSubject
import com.lightningkite.rx.ValueSubject
import com.lightningkite.rx.android.*
import com.lightningkite.rx.viewgenerators.EntryPoint
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rx.android.onClick
import com.lightningkite.rxexample.databinding.ComponentTestBinding
import com.lightningkite.rxexample.databinding.SelectDemoBinding
import com.lightningkite.khrysalis.SharedCode

class SelectDemoVG(val stack: StackSubject<ViewGenerator>) : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("Select Demo")

    val options: List<ViewGenerator> = listOf(
        ExampleContentVG(),
        VideoDemoVG(),
        WebsocketDemoVG(),
        HttpDemoVG(),
        ExternalTestVG(),
        DateButtonDemoVG(),
        LocationDemoVG(),
        LoginDemoVG(stack),
        LoadImageDemoVG(),
        ControlsDemoVG(),
        ViewPagerDemoVG(stack),
        SliderDemoVG()
    )

    fun selectVG(viewGenerator: ViewGenerator){
        stack.push(viewGenerator)
    }

    override fun generate(dependency: ActivityAccess): View {
        val xml = SelectDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        options.first()
        Observable.just(options).showIn(xml.list){ obs: Observable<ViewGenerator> ->
            val xml = ComponentTestBinding.inflate(dependency.layoutInflater)
            val view = xml.root
            obs.subscribeAutoDispose(xml.label) { setText((it as? HasTitle)?.title ?: ViewStringRaw("")) }
            xml.button.clicks()
                .flatMap { obs.take(1) }
                .subscribeAutoDispose(view) { selectVG(it) }
            view
        }

        return view
    }
}

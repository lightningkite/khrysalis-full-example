
package com.lightningkite.rxexample.vg

import android.view.View
import com.badoo.reaktive.disposable.addTo
import com.badoo.reaktive.observable.*
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.viewgenerators.StackSubject
import com.lightningkite.rx.android.*
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.ComponentTestBinding
import com.lightningkite.rxexample.databinding.SelectDemoBinding

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

    fun selectVG(viewGenerator: ViewGenerator) {
        stack.push(viewGenerator)
    }

    override fun generate(dependency: ActivityAccess): View {
        val xml = SelectDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        observableOf(options)
            .showIn(xml.list) { obs: Observable<ViewGenerator> ->
                val cellXml = ComponentTestBinding.inflate(dependency.layoutInflater)
                val cellView = cellXml.root
                obs.subscribeAutoDispose(cellXml.label) { setText((it as? HasTitle)?.title ?: ViewStringRaw("")) }
                cellXml.button.clicks()

                    .flatMap { obs.take(1) }
                    .subscribeAutoDispose(cellView) { selectVG(it) }
                cellView
            }

        return view
    }
}

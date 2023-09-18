package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.TextView
import com.badoo.reaktive.disposable.addTo
import com.badoo.reaktive.observable.*
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess

import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rx.android.onClick
import com.lightningkite.rxexample.databinding.ExampleContentBinding
import com.lightningkite.rx.android.subscribeAutoDispose
import com.lightningkite.rx.android.removed

class ExampleContentVG : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("Example Content")

    val number: BehaviorSubject<Int> = BehaviorSubject(0)
    val chained: BehaviorSubject<BehaviorSubject<Int>> = BehaviorSubject(BehaviorSubject(0))

    fun increment(){
        number.onNext( number.value + 1)
    }

    override fun generate(dependency: ActivityAccess): View {
        val xml = ExampleContentBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        observableInterval(1000L, mainScheduler)
            .doOnAfterDispose { println("KILLING LISTENER") }
            .subscribe(
                onNext = {
                    println("HEY LISTEN")
                    xml.incrementingNumber.setText(it.toString())
                },
                onComplete = {
                    xml.incrementingNumber.setText("All done!")
                }
            )
            .addTo(xml.incrementingNumber.removed)

        xml.exampleContentIncrement.onClick(0L){ this.increment() }
        number
            .map { it -> it.toString() }
            .subscribeAutoDispose(xml.exampleContentNumber, TextView::setText)

        xml.chainedIncrement
            .onClick(0L) { this.chained.value.onNext(this.chained.value.value + 1) }
        chained
            .flatMap { it -> it }
            .map { it -> it.toString() }
            .subscribeAutoDispose(xml.chainedNumber, TextView::setText)

        xml.scrollToTop.onClick { xml.scrollView.smoothScrollTo(0,0) }
        return view
    }
}

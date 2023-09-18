package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.TextView
import androidx.core.view.isVisible
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.viewgenerators.StackSubject

import com.lightningkite.rx.viewgenerators.EntryPoint
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rx.android.onClick
import com.lightningkite.rxexample.databinding.MainBinding
import com.lightningkite.rx.android.subscribeAutoDispose
import com.lightningkite.rxexample.api.helloWorld

class MainVG : ViewGenerator, HasTitle, EntryPoint {
    override val title: ViewString get() = ViewStringRaw("Main")

    val stack: StackSubject<ViewGenerator> = BehaviorSubject(listOf<ViewGenerator>())
    override val mainStack: StackSubject<ViewGenerator>?
        get() = stack
    val shouldBackBeShown: Observable<Boolean> = stack.map { it -> it.size > 1 }

    init {
        stack.push(SelectDemoVG(stack))
    }

    override fun generate(dependency: ActivityAccess): View {
        val xml = MainBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        helloWorld()

        stack.showIn(xml.mainContent, dependency)

        stack
            .map { it -> (it.lastOrNull() as? HasTitle)?.title?.get(dependency.context) ?: "" }
            .subscribeAutoDispose<Observable<String>, TextView, String>(xml.title, TextView::setText)

        shouldBackBeShown
            .subscribeAutoDispose(xml.mainBack, View::isVisible)

        xml.mainBack.onClick { this.stack.pop() }

        return view
    }

    override fun handleDeepLink(schema: String, host: String, path: String, params: Map<String, String>) {
        stack.push(ExampleContentVG())
    }

}

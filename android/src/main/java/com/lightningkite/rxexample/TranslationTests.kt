package com.lightningkite.rxexample

import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.badoo.reaktive.observable.distinctUntilChanged
import com.badoo.reaktive.observable.observableOf
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.badoo.reaktive.subject.publish.PublishSubject
import com.lightningkite.rx.*
import com.lightningkite.rx.android.exists
import com.lightningkite.rx.android.replace
import com.lightningkite.rx.android.visible
import com.lightningkite.rx.okhttp.from
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.Response
import java.time.ZoneId
import java.util.*

fun test(old: View, new: RecyclerView, layout: ViewGroup, response: Response) {
    val regex = Regex("asdf")
    val a = "asdf".matches(regex)
    val b = "asdf".uppercase()
    val c = 'd'.uppercase()
    val d = listOf(1, 2, 3).reduceOrNull { acc, i -> acc + i }
//    val e = mapOf<Int, Int>(1 to 2, 3 to 4) - Pair(3, 4)
    val f = mapOf(1 to 2).entries.first().toPair()
    val g = Optional.empty<Int>().isPresent
    println(ZoneId.systemDefault().id)
    old.replace(new)
    old.exists = false
    old.exists = true
    old.visible = false
    old.visible = true
    layout.addView(old)
    println(response.code)
    MultipartBody.from(
        MultipartBody.Part.createFormData("asdf", "fdsa"),
        MultipartBody.Part.createFormData("asdf", "fdsa", "asdf".toRequestBody())
    )
    val h = observableOf(1).withWrite { println("write") }
    val i = observableOf(1).combineLatest(observableOf(2)) { a, b -> a + b }
    val j = PublishSubject<Int>().isEqualTo(2)
    new.layoutManager = GridLayoutManager(old.context, 3)
    BehaviorSubject<Int?>(1).onNext(null)
    TODO()
    TODO("asdf")
}
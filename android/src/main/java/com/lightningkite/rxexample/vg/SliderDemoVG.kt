package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.ProgressBar
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.map
import com.lightningkite.rx.android.bind

import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.SliderDemoBinding
import com.lightningkite.rx.android.subscribeAutoDispose
import com.lightningkite.rx.toSubjectFloat
import com.lightningkite.rx.android.progressRatio

class SliderDemoVG() : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("Slider Demo")

    val ratio: BehaviorSubject<Float> = BehaviorSubject(0f)
    val percent = ratio.map(
        read = { it -> (it * 100).toInt() },
        write = { it -> it.toFloat() / 100f }
    )
    val obsRatingInt = ratio.map(
        read = { it -> (it * 5).toInt() },
        write = { it -> it.toFloat() / 5f }
    )
    val obsRatingFloat = ratio.map(
        read = { it -> it * 5f },
        write = { it -> it / 5f }
    )

    override fun generate(dependency: ActivityAccess): View {
        val xml = SliderDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        xml.slider.max = 100 - 0;
        percent.bind(xml.slider)
        percent.subscribeAutoDispose(xml.valueDisplay) { xml.valueDisplay.text = it.toString() }
//        xml.progress.max = 10000;
        ratio.subscribeAutoDispose(xml.progress, ProgressBar::progressRatio)

        xml.rating.numStars = 5
        xml.rating.stepSize = 1f
        obsRatingInt.toSubjectFloat().bind(xml.rating)
        xml.ratingDisplayStars.numStars = 5
        obsRatingInt.toSubjectFloat().bind(xml.ratingDisplayStars)
        xml.ratingDisplayStarsSmall.numStars = 5
        obsRatingInt.toSubjectFloat().bind(xml.ratingDisplayStarsSmall)

        obsRatingInt.subscribeAutoDispose(xml.ratingDisplayNumber) { xml.ratingDisplayNumber.text = it.toString() }

        xml.ratingFloat.stepSize = 0.01f
        xml.ratingFloat.numStars = 5
        obsRatingFloat.subscribeAutoDispose(xml.ratingFloat) { xml.ratingFloat.rating = it }
        xml.ratingDisplayStarsFloat.numStars = 5
        obsRatingFloat.subscribeAutoDispose(xml.ratingDisplayStarsFloat) { xml.ratingDisplayStarsFloat.rating = it }
        xml.ratingDisplayStarsSmallFloat.numStars = 5
        obsRatingFloat.subscribeAutoDispose(xml.ratingDisplayStarsSmallFloat) { xml.ratingDisplayStarsSmallFloat.rating = it }
        obsRatingFloat.subscribeAutoDispose(xml.ratingDisplayNumberFloat) {
            xml.ratingDisplayNumberFloat.text = it.toString()
        }

        return view
    }
}

package com.lightningkite.rxexample.vg

import android.view.View
import android.widget.ImageView
import android.widget.TextView
import com.badoo.reaktive.disposable.addTo
import com.badoo.reaktive.maybe.subscribe
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.observable.subscribe
import com.badoo.reaktive.single.subscribe
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.android.resources.Image
import com.lightningkite.rx.android.resources.ImageReference
import com.lightningkite.rx.android.resources.ImageRemoteUrl
import com.lightningkite.rx.viewgenerators.ActivityAccess

import com.lightningkite.rx.android.removed
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.LoadImageDemoBinding
import com.lightningkite.rx.okhttp.toRequestBody

class LoadImageDemoVG : ViewGenerator, HasTitle {
    override val title: ViewString get() = ViewStringRaw("Load Image Demo")

    val canUpload = BehaviorSubject<Boolean?>(null)
    val currentImage = BehaviorSubject<Image?>(null)

    override fun generate(dependency: ActivityAccess): View {
        val xml = LoadImageDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        currentImage
            .subscribe { canUpload.onNext(null) }
            .addTo(view.removed)

        currentImage.subscribeAutoDispose<Observable<Image?>, ImageView, Image?>(xml.image) { xml.image.setImage(
            it
        ) }
        xml.camera.onClick {
            dependency.requestImageCamera().subscribe { url ->
                currentImage.onNext(ImageReference(url))
            }
        }
        xml.galleryMultiple.onClick {
            dependency.requestImagesGallery().subscribe { urls ->
                urls.firstOrNull()?.let { url ->
                    currentImage.onNext(ImageReference(url))
                }
            }
        }
        xml.gallery.onClick {
            dependency.requestImageGallery().subscribe { url ->
                currentImage.onNext(ImageReference(url))
            }
        }
        xml.loremPixel.onClick {
            currentImage.onNext(ImageRemoteUrl("https://picsum.photos/200"))
        }
        xml.checkCanUpload.onClick {
            currentImage.value?.let { i ->
                i.toRequestBody().subscribe(
                    onError = {
                        it.printStackTrace()
                        canUpload.onNext(false)
                    },
                    onSuccess = {
                        canUpload.onNext(true)
                    }
                )
            }
        }
        canUpload
            .map { if (it == null) "Not checked" else if (it == true) "Good to go!" else "FAILED!!!" }
            .subscribeAutoDispose(xml.canUpload, TextView::setText)
        return view
    }
}

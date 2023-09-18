//
// VideoDemoVG.swift
// Created by Butterfly Prototype Generator
// Sections of this file can be replaces if the marker, '(overwritten on flow generation)', is left in place.
//
package com.lightningkite.rxexample.vg

//--- Imports

import android.view.View
import com.badoo.reaktive.maybe.subscribe
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import com.lightningkite.rx.android.resources.Video
import com.lightningkite.rx.android.resources.VideoReference
import com.lightningkite.rx.android.resources.VideoRemoteUrl
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.VideoDemoBinding
import java.util.*

//--- Name (overwritten on flow generation)
@Suppress("NAME_SHADOWING")
class VideoDemoVG(
    //--- Dependencies (overwritten on flow generation)
    //--- Extends (overwritten on flow generation)
) : ViewGenerator, HasTitle {


    //--- Title (overwritten on flow generation)
    override val title: ViewString get() = ViewStringRaw("Video Demo")

    //--- Properties
    val currentVideo =
        BehaviorSubject<Video>(VideoRemoteUrl("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"))

    //--- Generate Start (overwritten on flow generation)
    override fun generate(dependency: ActivityAccess): View {
        val xml = VideoDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root

        //--- Set Up xml.video
        currentVideo
            .subscribeAutoDispose(xml.video) { xml.video.setVideo(it, false) }

        //--- Set Up xml.gallery
        xml.gallery.onClick {
            dependency
                .requestVideoGallery()
                .subscribe{ currentVideo.onNext( VideoReference(it)) }
        }

        //--- Set Up xml.camera
        xml.camera.onClick {
            dependency
                .requestVideoCamera()
                .subscribe { currentVideo.onNext( VideoReference(it)) }
        }

        //--- Set Up xml.galleryMulti
        xml.galleryMulti.onClick {
            dependency
                .requestVideosGallery()
                .subscribe { it.firstOrNull()?.let { currentVideo.onNext( VideoReference(it) ) }}
        }

        //--- Generate End (overwritten on flow generation)

        return view
    }

    //--- Init

    init {
        //--- Init End
    }

    //--- Actions


    //--- Action galleryClick

    //--- Action cameraClick 

    //--- Action galleryMultiClick

    //--- Body End
}

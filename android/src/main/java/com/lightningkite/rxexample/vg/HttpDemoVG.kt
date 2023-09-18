//
// HttpDemoVG.swift
// Created by Butterfly Prototype Generator
// Sections of this file can be replaces if the marker, '(overwritten on flow generation)', is left in place.
//
package com.lightningkite.rxexample.vg

//--- Imports

import android.view.View
import android.widget.ProgressBar
import android.widget.TextView
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.observable.mapNotNull
import com.badoo.reaktive.observable.startWithValue
import com.lightningkite.rx.viewgenerators.ActivityAccess
import com.lightningkite.rx.okhttp.HttpClient
import com.lightningkite.rx.okhttp.readJson

import com.lightningkite.rx.viewgenerators.*
import com.lightningkite.rx.android.resources.*
import com.lightningkite.rxexample.databinding.ComponentTextBinding
import com.lightningkite.rxexample.databinding.HttpDemoBinding
import com.lightningkite.rx.android.*
import com.lightningkite.rxexample.models.Post

//--- Name (overwritten on flow generation)
@Suppress("NAME_SHADOWING")
class HttpDemoVG(
    //--- Dependencies (overwritten on flow generation)
    //--- Extends (overwritten on flow generation)
) : ViewGenerator, HasTitle {


    //--- Title (overwritten on flow generation)
    override val title: ViewString get() = ViewStringRaw("Http Demo")

    //--- Generate Start (overwritten on flow generation)
    override fun generate(dependency: ActivityAccess): View {
        val xml = HttpDemoBinding.inflate(dependency.layoutInflater)
        val view = xml.root
        
        //--- Call
        val call = HttpClient.callWithProgress("https://jsonplaceholder.typicode.com/posts/", parse = { it.readJson<List<Post>>() })

        //--- Set Up xml.progress
        call.map { it.approximate }.startWithValue(0f)
            .subscribeAutoDispose(xml.progress, ProgressBar::progressRatio)

        //--- Set Up xml.items
        call
            .mapNotNull { it.response }
            .startWithValue(listOf(Post(0, 0, "Loading...", "-")))
            .showIn(xml.items) label@{ observable ->
                //--- Make Subview For xml.items
                val cellXml = ComponentTextBinding.inflate(dependency.layoutInflater)
                val cellView = cellXml.root

                //--- Set Up cellXml.label
                observable.map { it -> it.title }
                    .subscribeAutoDispose(cellXml.label, TextView::setText)
                //--- End Make Subview For xml.items
                return@label cellView
            }

        //--- Generate End (overwritten on flow generation)
        
        return view
    }
    
    //--- Init

    init {
    //--- Init End
    }

    //--- Actions


    //--- Body End
}

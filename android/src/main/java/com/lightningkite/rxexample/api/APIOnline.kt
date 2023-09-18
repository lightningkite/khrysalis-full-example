@file:Suppress("ConvertToStringTemplate", "RemoveExplicitTypeArguments")

package com.lightningkite.rxexample.api

import com.lightningkite.rx.okhttp.HttpClient
import com.lightningkite.rx.okhttp.readJson
import com.lightningkite.rxexample.models.Post
import com.badoo.reaktive.single.Single


class APIOnline(val baseUrl: String = "https://jsonplaceholder.typicode.com") : APIInterface {
    override fun getExamplePosts(): Single<List<Post>> {
        return HttpClient.call(
            url = baseUrl + "/posts",
            method = HttpClient.GET,
            headers = mapOf()
        ).readJson()
    }

}

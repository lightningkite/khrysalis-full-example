@file:SharedCode
package com.lightningkite.rxexample.models

import com.lightningkite.khrysalis.SharedCode
import com.lightningkite.khrysalis.Codable

data class Post(
    var userId: Long = 0,
    var id: Long = 0,
    var title: String = "",
    var body: String = ""
): Codable

import com.lightningkite.convertlayout.gradle.androidLayoutConverter

plugins {
    id("com.android.application")
    id("kotlin-android")
    id("com.lightningkite.androidlayouttranslator")
    id("com.lightningkite.rx")
    kotlin("plugin.serialization")
}

android {
    compileSdk = 33
    defaultConfig {
        minSdk = 24
        targetSdk = 33
        multiDexEnabled = true
        applicationId = "com.lightningkite.rxexample"
        versionCode = 5
        versionName = "1.0.5"
    }
    compileOptions {
        targetCompatibility = JavaVersion.VERSION_1_8
        sourceCompatibility = JavaVersion.VERSION_1_8
        isCoreLibraryDesugaringEnabled = true
    }
    buildFeatures {
        viewBinding = true
    }
    packagingOptions {
        resources.excludes.add("META-INF/**")
    }
}

val kotlinVersion:String by extra
val androidRuntimeVersion: String by extra
val rxPlusVersion: String by extra
dependencies {

    // These are our support libraries built around khrysalis. They have equivalent packages for web and swift.
    implementation("com.lightningkite.androidlayouttranslator:android-runtime:${androidRuntimeVersion}")
    implementation("com.lightningkite.rx:view-generator:$rxPlusVersion")
    implementation("com.lightningkite.rx:okhttp:$rxPlusVersion")
    implementation("com.lightningkite.rx:okhttp-resources:$rxPlusVersion")


    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test:runner:1.5.2")
    androidTestImplementation("com.android.support.test.espresso:espresso-core:3.0.2")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlinVersion")
    implementation("org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion")
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:1.1.5")
}


androidLayoutConverter{
    iosProjectName = "KhrysalisFullExample"
    // These two are redundant, but show how you can customize these.
    iosModuleName = "KhrysalisFullExample"
    this.iosFolder = project.rootDir.resolve("ios")

    // These two are redundant, but show how you can customize these.
    webProjectName = "KhrysalisFullExample"
    webFolder = rootDir.resolve("web")
}

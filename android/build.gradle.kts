import com.lightningkite.convertlayout.gradle.androidLayoutConverter

plugins {
    id("com.android.application")
    id("kotlin-android")
    id("com.lightningkite.khrysalis")
    id("com.lightningkite.androidlayouttranslator")
    kotlin("plugin.serialization") version "1.6.10"
}

android {
    compileSdk = 31
    defaultConfig {
        minSdk = 21
        targetSdk = 31
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

repositories {
//  mavenLocal()
    maven(url = "https://s01.oss.sonatype.org/content/repositories/releases/")
    google()
    mavenCentral()
}

val khrysaliVersion = "1.0.0-rc3"
val rxPlusVersion = "1.0.0-rc4"
val kotlinVersion = "1.6.10"
dependencies {

    // To use khrysalis you need the these plugins for each language you wish to use.
    kcp("com.lightningkite.khrysalis:kotlin-compiler-plugin-swift:$khrysaliVersion")
    kcp("com.lightningkite.khrysalis:kotlin-compiler-plugin-typescript:$khrysaliVersion")

    // These are our support libraries built around khrysalis. They have equivalent packages for web and swift.
    implementation("com.lightningkite.khrysalis:jvm-runtime:$khrysaliVersion")
    implementation("com.lightningkite.androidlayouttranslator:android-runtime:1.0.0-rc2")
    implementation("com.lightningkite.rx:view-generator:$rxPlusVersion")
    implementation("com.lightningkite.rx:okhttp:$rxPlusVersion")
    implementation("com.lightningkite.rx:okhttp-resources:$rxPlusVersion")

    // This defines where to find equivalent files for translation.
    equivalents("com.lightningkite.androidlayouttranslator:android-runtime:1.0.0-rc2:equivalents")
    equivalents("com.lightningkite.khrysalis:jvm-runtime:$khrysaliVersion:equivalents")
    equivalents("com.lightningkite.rx:rxplus:$rxPlusVersion:equivalents")

    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test:runner:1.4.0")
    androidTestImplementation("com.android.support.test.espresso:espresso-core:3.0.2")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlinVersion")
    implementation("org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion")
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:1.1.5")
}

khrysalis {
    iosProjectName = "KhrysalisFullExample"
    //These two are redundant, but show how you can define a where the ios project exists.
    iosProjectFolder = project.rootDir.resolve("ios")
    iosSourceFolder = rootDir.resolve("ios/KhrysalisFullExample/src")

    webProjectName = "KhrysalisFullExample"
    //These two are redundant, but show how you can define a where the web project exists.
    webProjectFolder = rootDir.resolve("web")
    webSourceFolder = rootDir.resolve("web/src")
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

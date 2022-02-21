import com.lightningkite.convertlayout.gradle.xmlToXib

plugins {
    id("com.android.application")
    id("kotlin-android")
    id("com.lightningkite.khrysalis")
    id("com.lightningkite.xmltoxib")
}

android {
    //    buildToolsVersion = "28.0.3"
    compileSdkVersion(31)
    defaultConfig {
        minSdkVersion(21)
        targetSdkVersion(31)
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
        exclude("META-INF/**")
    }
}

repositories {
    mavenLocal()
    maven(url="https://s01.oss.sonatype.org/content/repositories/snapshots/")
    google()
    mavenCentral()
    maven("https://jitpack.io")
}

val kotlin_version = "1.6.0"
dependencies {
    kcp("com.lightningkite.khrysalis:kotlin-compiler-plugin-swift:master-SNAPSHOT")
    kcp("com.lightningkite.khrysalis:kotlin-compiler-plugin-typescript:master-SNAPSHOT")
    kcp("com.lightningkite.khrysalis:kotlin-compiler-plugin-kotlin:master-SNAPSHOT")
    implementation("com.lightningkite.xmltoxib:safe-insets:master-SNAPSHOT")
    implementation("com.lightningkite.khrysalis:jvm-runtime:master-SNAPSHOT")
    implementation("com.lightningkite.rx:view-generator:master-SNAPSHOT")
    implementation("com.lightningkite.rx:okhttp:master-SNAPSHOT")
    implementation("com.lightningkite.rx:okhttp-resources:master-SNAPSHOT")
    testImplementation("junit:junit:4.12")
    androidTestImplementation("androidx.test:runner:1.3.0")
    androidTestImplementation("com.android.support.test.espresso:espresso-core:3.0.2")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version")
    implementation("org.jetbrains.kotlin:kotlin-reflect:$kotlin_version")
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:1.1.5")
}

khrysalis {
    projectName = "KhrysalisFullExample"
    this.overrideIosFolder = project.rootDir.resolve("ios")
}
xmlToXib {
    iosProjectName = "KhrysalisFullExample"
    this.iosFolder = project.rootDir.resolve("ios")
}

tasks.create("wrapper"){

}
tasks.create("prepareKotlinBuildScriptModel"){

}
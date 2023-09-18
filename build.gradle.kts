
buildscript {
    val kotlinVersion:String by extra
    val androidRuntimeVersion: String by extra
    val rxPlusVersion: String by extra
    repositories {
        mavenLocal()
        maven(url = "https://s01.oss.sonatype.org/content/repositories/snapshots/")
        maven(url = "https://s01.oss.sonatype.org/content/repositories/releases/")
        google()
        mavenCentral()
    }
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
        classpath("com.lightningkite.androidlayouttranslator:plugin:$androidRuntimeVersion")
        classpath("com.lightningkite.rx:view-generator-plugin:$rxPlusVersion")
        classpath("com.android.tools.build:gradle:7.2.2")

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
allprojects {
    repositories {
        mavenLocal()
        maven(url = "https://s01.oss.sonatype.org/content/repositories/releases/")
        maven("https://jitpack.io")
        google()
        mavenCentral()
    }
}

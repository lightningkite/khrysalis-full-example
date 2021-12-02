
buildscript {
    val kotlinVersion = "1.6.0"
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.lightningkite.khrysalis:plugin:0.7.1")
        classpath("com.lightningkite.xmltoxib:plugin:0.7.1")
        classpath("com.android.tools.build:gradle:4.2.2")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
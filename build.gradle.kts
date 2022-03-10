
buildscript {
    val kotlinVersion = "1.6.0"
    repositories {
        mavenLocal()
        maven(url="https://s01.oss.sonatype.org/content/repositories/snapshots/")
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.lightningkite.khrysalis:plugin:1.0.0-rc1-SNAPSHOT")
        classpath("com.lightningkite.xmltoxib:plugin:1.0.0-rc1-SNAPSHOT")
        classpath("com.android.tools.build:gradle:4.2.2")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
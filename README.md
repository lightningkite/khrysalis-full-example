# Building

## Android

Compile as a normal Android Studio app.

## iOS

- Run the Gradle task `compileDebugKotlinToSwift`
- Run the Gradle task `xmlToXib`
- `cd ios`
- `pod install`
- Open the `.xcworkspace` and compile in XCode

## Web

- Run the Gradle task `compileDebugKotlinToTypescript`
- Run the Gradle task `xmlToHtml`
- `cd web`
- `npm i`
- `./localInstall.sh` to pull from your local machine - make sure you've cloned 
  - android-xml-runtime
  - khrysalis-runtime
  - rxjs-plus
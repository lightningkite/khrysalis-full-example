// File: /home/jivie/Projects/khrysalis-full-example/android/src/main/java/com/lightningkite/rxexample/api/API.kt
// Package: com.lightningkite.rxexample.api
// Generated by Khrysalis - this file will be overwritten.
import { APIOnline } from './APIOnline'
import { APIInterface } from './APIInterface'

//! Declares com.lightningkite.rxexample.api.API
export let _API: APIInterface = new APIOnline(undefined);
export function getAPI(): APIInterface { return _API; }
export function setAPI(value: APIInterface) { _API = value; }

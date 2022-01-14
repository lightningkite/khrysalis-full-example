import {inflateHtmlFile} from "android-xml-runtime";
import html from './component_ble_device.html'

//! Declares com.lightningkite.rxexample.databinding.ComponentBleDeviceBinding
export interface ComponentBleDeviceBinding {
    root: HTMLElement
    deviceName: HTMLDivElement
    deviceId: HTMLDivElement
    rssi: HTMLDivElement
    connect: HTMLButtonElement
    
}

export namespace ComponentBleDeviceBinding {
   export function inflate() {
       return inflateHtmlFile(html, ["deviceName", "deviceId", "rssi", "connect"], {}) as ComponentBleDeviceBinding
   }
}

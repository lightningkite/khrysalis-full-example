//
// ComponentBleDeviceBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class ComponentBleDeviceBinding: XibView {

    @IBOutlet weak public var rssi: UILabel!
    @IBOutlet weak public var deviceName: UILabel!
    @IBOutlet weak public var deviceId: UILabel!
    @IBOutlet weak public var connect: UIButton!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
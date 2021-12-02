//
// ComponentBleDeviceBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ComponentBleDeviceBinding: XibView {

    @IBOutlet weak private var _rssi: UILabel!
    @IBOutlet weak private var _deviceName: UILabel!
    @IBOutlet weak private var _deviceId: UILabel!
    @IBOutlet weak private var _connect: UIButton!
    public var rssi: UILabel { return _rssi }
    public var deviceName: UILabel { return _deviceName }
    public var deviceId: UILabel { return _deviceId }
    public var connect: UIButton { return _connect }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
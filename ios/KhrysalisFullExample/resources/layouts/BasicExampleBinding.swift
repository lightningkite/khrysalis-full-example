//
// BasicExampleBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class BasicExampleBinding: XibView {

    @IBOutlet weak private var _theNumber: UILabel!
    @IBOutlet weak private var _incrementTheNumber: UIButton!
    public var theNumber: UILabel { return _theNumber }
    public var incrementTheNumber: UIButton { return _incrementTheNumber }

}
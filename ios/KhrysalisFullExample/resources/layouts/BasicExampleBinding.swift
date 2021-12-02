//
// BasicExampleBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class BasicExampleBinding: XibView {

    @IBOutlet weak private var _incrementTheNumber: UIButton!
    @IBOutlet weak private var _theNumber: UILabel!
    public var incrementTheNumber: UIButton { return _incrementTheNumber }
    public var theNumber: UILabel { return _theNumber }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
//
// BasicExampleBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class BasicExampleBinding: XibView {

    @IBOutlet weak public var incrementTheNumber: UIButton!
    @IBOutlet weak public var theNumber: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
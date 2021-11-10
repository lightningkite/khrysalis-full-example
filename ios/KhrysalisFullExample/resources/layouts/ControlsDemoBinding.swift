//
// ControlsDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import SearchTextField

class ControlsDemoBinding: XibView {

    @IBOutlet weak public var editableText: UITextField!
    @IBOutlet weak public var editableTextCopy: UILabel!
    @IBOutlet weak public var numberText: UITextField!
    @IBOutlet weak public var editableAutoText: SearchTextField!
    @IBOutlet weak public var editableTextBig: UITextField!
    @IBOutlet weak public var spinner: UIButton!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
//
// LoginDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import XmlToXibRuntime

class LoginDemoBinding: XibView {

    @IBOutlet weak public var verifyPassword: UITextField!
    @IBOutlet weak public var password: UITextField!
    @IBOutlet weak public var submit: UIButton!
    @IBOutlet weak public var submitLoading: UIView!
    @IBOutlet weak public var agree: LabeledToggle!
    @IBOutlet weak public var username: UITextField!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
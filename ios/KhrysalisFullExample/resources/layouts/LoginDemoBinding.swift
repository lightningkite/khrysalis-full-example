//
// LoginDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import XmlToXibRuntime

public class LoginDemoBinding: XibView {

    @IBOutlet weak private var _username: UITextField!
    @IBOutlet weak private var _password: UITextField!
    @IBOutlet weak private var _verifyPassword: UITextField!
    @IBOutlet weak private var _agree: LabeledToggle!
    @IBOutlet weak private var _submitLoading: UIView!
    @IBOutlet weak private var _submit: UIButton!
    public var username: UITextField { return _username }
    public var password: UITextField { return _password }
    public var verifyPassword: UITextField { return _verifyPassword }
    public var agree: LabeledToggle { return _agree }
    public var submitLoading: UIView { return _submitLoading }
    public var submit: UIButton { return _submit }
    
    public override func selectNibName() -> String {
       
        return "LoginDemoBinding"
    }

}
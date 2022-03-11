//
// ControlsDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import XmlToXibRuntime
import M13Checkbox
import UIKit
import SearchTextField

public class ControlsDemoBinding: XibView {

    @IBOutlet weak private var _toggleSwitch: LabeledToggle!
    @IBOutlet weak private var _check: LabeledToggle!
    @IBOutlet weak private var _checkAlt: M13Checkbox!
    @IBOutlet weak private var _editableText: UITextField!
    @IBOutlet weak private var _numberText: UITextField!
    @IBOutlet weak private var _editableAutoText: SearchTextField!
    @IBOutlet weak private var _editableTextCopy: UILabel!
    @IBOutlet weak private var _editableTextBig: UITextView!
    @IBOutlet weak private var _spinner: UIButton!
    public var toggleSwitch: LabeledToggle { return _toggleSwitch }
    public var check: LabeledToggle { return _check }
    public var checkAlt: M13Checkbox { return _checkAlt }
    public var editableText: UITextField { return _editableText }
    public var numberText: UITextField { return _numberText }
    public var editableAutoText: SearchTextField { return _editableAutoText }
    public var editableTextCopy: UILabel { return _editableTextCopy }
    public var editableTextBig: UITextView { return _editableTextBig }
    public var spinner: UIButton { return _spinner }

}
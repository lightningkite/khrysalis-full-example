//
// ControlsDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import SearchTextField

public class ControlsDemoBinding: XibView {

    @IBOutlet weak private var _editableText: UITextField!
    @IBOutlet weak private var _editableTextCopy: UILabel!
    @IBOutlet weak private var _numberText: UITextField!
    @IBOutlet weak private var _editableAutoText: SearchTextField!
    @IBOutlet weak private var _editableTextBig: UITextField!
    @IBOutlet weak private var _spinner: UIButton!
    public var editableText: UITextField { return _editableText }
    public var editableTextCopy: UILabel { return _editableTextCopy }
    public var numberText: UITextField { return _numberText }
    public var editableAutoText: SearchTextField { return _editableAutoText }
    public var editableTextBig: UITextField { return _editableTextBig }
    public var spinner: UIButton { return _spinner }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
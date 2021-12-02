//
// ComponentTestBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ComponentTestBinding: XibView {

    @IBOutlet weak private var _button: UIButton!
    @IBOutlet weak private var _label: UILabel!
    public var button: UIButton { return _button }
    public var label: UILabel { return _label }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
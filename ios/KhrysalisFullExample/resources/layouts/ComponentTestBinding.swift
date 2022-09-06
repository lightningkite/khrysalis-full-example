//
// ComponentTestBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ComponentTestBinding: XibView {

    @IBOutlet weak private var _label: UILabel!
    @IBOutlet weak private var _button: UIButton!
    public var label: UILabel { return _label }
    public var button: UIButton { return _button }
    
    public override func selectNibName() -> String {
       
        return "ComponentTestBinding"
    }

}
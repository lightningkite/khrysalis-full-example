//
// ComponentTextBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ComponentTextBinding: XibView {

    @IBOutlet weak private var _label: UILabel!
    public var label: UILabel { return _label }
    
    public override func selectNibName() -> String {
       
        return "ComponentTextBinding"
    }

}
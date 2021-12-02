//
// SegmentedControlDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class SegmentedControlDemoBinding: XibView {

    @IBOutlet weak private var _tabs2: UISegmentedControl!
    @IBOutlet weak private var _tabs: UISegmentedControl!
    public var tabs2: UISegmentedControl { return _tabs2 }
    public var tabs: UISegmentedControl { return _tabs }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
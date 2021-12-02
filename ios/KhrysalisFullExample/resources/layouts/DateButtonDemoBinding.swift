//
// DateButtonDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class DateButtonDemoBinding: XibView {

    @IBOutlet weak private var _dateButton: UIButton!
    @IBOutlet weak private var _timeButton: UIButton!
    @IBOutlet weak private var _text: UILabel!
    public var dateButton: UIButton { return _dateButton }
    public var timeButton: UIButton { return _timeButton }
    public var text: UILabel { return _text }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
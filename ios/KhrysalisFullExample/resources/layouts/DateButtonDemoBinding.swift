//
// DateButtonDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class DateButtonDemoBinding: XibView {

    @IBOutlet weak private var _text: UILabel!
    @IBOutlet weak private var _dateButton: UIButton!
    @IBOutlet weak private var _timeButton: UIButton!
    public var text: UILabel { return _text }
    public var dateButton: UIButton { return _dateButton }
    public var timeButton: UIButton { return _timeButton }
    
    public override func selectNibName() -> String {
       
        return "DateButtonDemoBinding"
    }

}
//
// DateButtonDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class DateButtonDemoBinding: XibView {

    @IBOutlet weak public var dateButton: UIButton!
    @IBOutlet weak public var timeButton: UIButton!
    @IBOutlet weak public var text: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
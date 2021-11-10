//
// ExternalTestBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class ExternalTestBinding: XibView {

    @IBOutlet weak public var scrollView: UIScrollView!
    @IBOutlet weak public var openMap: UIButton!
    @IBOutlet weak public var openEvent: UIButton!
    @IBOutlet weak public var openWeb: UIButton!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
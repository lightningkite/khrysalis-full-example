//
// ExampleContentBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class ExampleContentBinding: XibView {

    @IBOutlet weak public var chainedNumber: UILabel!
    @IBOutlet weak public var scrollToTop: UIButton!
    @IBOutlet weak public var chainedIncrement: UIButton!
    @IBOutlet weak public var scrollView: UIScrollView!
    @IBOutlet weak public var exampleContentNumber: UILabel!
    @IBOutlet weak public var exampleContentIncrement: UIButton!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
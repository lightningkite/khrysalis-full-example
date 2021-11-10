//
// MainBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import RxSwiftPlus

class MainBinding: XibView {

    @IBOutlet weak public var bottom0: UIView!
    @IBOutlet weak public var mainBack: UIButton!
    @IBOutlet weak public var mainContent: SwapView!
    @IBOutlet weak public var topBar: UIStackView!
    @IBOutlet weak public var title: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
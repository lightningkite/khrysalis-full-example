//
// PreviewBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class PreviewBinding: XibView {

    @IBOutlet weak public var viewName: UILabel!
    @IBOutlet weak public var pager: UICollectionView!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
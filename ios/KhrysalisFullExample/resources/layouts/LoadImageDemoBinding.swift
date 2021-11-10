//
// LoadImageDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

class LoadImageDemoBinding: XibView {

    @IBOutlet weak public var image: UIImageView!
    @IBOutlet weak public var loremPixel: UIButton!
    @IBOutlet weak public var checkCanUpload: UIButton!
    @IBOutlet weak public var galleryMultiple: UIButton!
    @IBOutlet weak public var camera: UIButton!
    @IBOutlet weak public var gallery: UIButton!
    @IBOutlet weak public var canUpload: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
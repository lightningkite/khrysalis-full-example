//
// VideoDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import RxSwiftPlus

class VideoDemoBinding: XibView {

    @IBOutlet weak public var play: UIButton!
    @IBOutlet weak public var galleryMulti: UIButton!
    @IBOutlet weak public var thumbnail: UIImageView!
    @IBOutlet weak public var video: ContainerView!
    @IBOutlet weak public var camera: UIButton!
    @IBOutlet weak public var gallery: UIButton!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
//
// SliderDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import Cosmos

class SliderDemoBinding: XibView {

    @IBOutlet weak public var slider: UISlider!
    @IBOutlet weak public var valueDisplay: UILabel!
    @IBOutlet weak public var ratingDisplayNumber: UILabel!
    @IBOutlet weak public var ratingDisplayStars: CosmosView!
    @IBOutlet weak public var ratingDisplayNumberFloat: UILabel!
    @IBOutlet weak public var rating: CosmosView!
    @IBOutlet weak public var progress: UIProgressView!
    @IBOutlet weak public var ratingFloat: CosmosView!
    @IBOutlet weak public var ratingDisplayStarsFloat: CosmosView!
    @IBOutlet weak public var ratingDisplayStarsSmall: CosmosView!
    @IBOutlet weak public var ratingDisplayStarsSmallFloat: CosmosView!

    override func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
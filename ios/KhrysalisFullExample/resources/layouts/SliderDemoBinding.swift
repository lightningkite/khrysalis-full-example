//
// SliderDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import Cosmos

public class SliderDemoBinding: XibView {

    @IBOutlet weak private var _slider: UISlider!
    @IBOutlet weak private var _valueDisplay: UILabel!
    @IBOutlet weak private var _progress: UIProgressView!
    @IBOutlet weak private var _rating: CosmosView!
    @IBOutlet weak private var _ratingDisplayStars: CosmosView!
    @IBOutlet weak private var _ratingDisplayStarsSmall: CosmosView!
    @IBOutlet weak private var _ratingDisplayNumber: UILabel!
    @IBOutlet weak private var _ratingFloat: CosmosView!
    @IBOutlet weak private var _ratingDisplayStarsFloat: CosmosView!
    @IBOutlet weak private var _ratingDisplayStarsSmallFloat: CosmosView!
    @IBOutlet weak private var _ratingDisplayNumberFloat: UILabel!
    public var slider: UISlider { return _slider }
    public var valueDisplay: UILabel { return _valueDisplay }
    public var progress: UIProgressView { return _progress }
    public var rating: CosmosView { return _rating }
    public var ratingDisplayStars: CosmosView { return _ratingDisplayStars }
    public var ratingDisplayStarsSmall: CosmosView { return _ratingDisplayStarsSmall }
    public var ratingDisplayNumber: UILabel { return _ratingDisplayNumber }
    public var ratingFloat: CosmosView { return _ratingFloat }
    public var ratingDisplayStarsFloat: CosmosView { return _ratingDisplayStarsFloat }
    public var ratingDisplayStarsSmallFloat: CosmosView { return _ratingDisplayStarsSmallFloat }
    public var ratingDisplayNumberFloat: UILabel { return _ratingDisplayNumberFloat }

}
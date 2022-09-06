//
// VideoDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import RxSwiftPlus
import UIKit

public class VideoDemoBinding: XibView {

    @IBOutlet weak private var _video: VCContainerView!
    @IBOutlet weak private var _gallery: UIButton!
    @IBOutlet weak private var _camera: UIButton!
    @IBOutlet weak private var _galleryMulti: UIButton!
    public var video: VCContainerView { return _video }
    public var gallery: UIButton { return _gallery }
    public var camera: UIButton { return _camera }
    public var galleryMulti: UIButton { return _galleryMulti }
    
    public override func selectNibName() -> String {
       
        return "VideoDemoBinding"
    }

}
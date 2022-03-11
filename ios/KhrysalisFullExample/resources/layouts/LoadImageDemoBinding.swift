//
// LoadImageDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class LoadImageDemoBinding: XibView {

    @IBOutlet weak private var _gallery: UIButton!
    @IBOutlet weak private var _galleryMultiple: UIButton!
    @IBOutlet weak private var _camera: UIButton!
    @IBOutlet weak private var _loremPixel: UIButton!
    @IBOutlet weak private var _image: UIImageView!
    @IBOutlet weak private var _checkCanUpload: UIButton!
    @IBOutlet weak private var _canUpload: UILabel!
    public var gallery: UIButton { return _gallery }
    public var galleryMultiple: UIButton { return _galleryMultiple }
    public var camera: UIButton { return _camera }
    public var loremPixel: UIButton { return _loremPixel }
    public var image: UIImageView { return _image }
    public var checkCanUpload: UIButton { return _checkCanUpload }
    public var canUpload: UILabel { return _canUpload }

}
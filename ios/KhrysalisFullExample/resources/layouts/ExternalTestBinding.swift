//
// ExternalTestBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ExternalTestBinding: XibView {

    @IBOutlet weak private var _scrollView: UIScrollView!
    @IBOutlet weak private var _openMap: UIButton!
    @IBOutlet weak private var _openEvent: UIButton!
    @IBOutlet weak private var _openWeb: UIButton!
    public var scrollView: UIScrollView { return _scrollView }
    public var openMap: UIButton { return _openMap }
    public var openEvent: UIButton { return _openEvent }
    public var openWeb: UIButton { return _openWeb }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
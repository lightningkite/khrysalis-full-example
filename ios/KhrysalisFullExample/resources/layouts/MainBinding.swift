//
// MainBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit
import RxSwiftPlus

public class MainBinding: XibView {

    @IBOutlet weak private var _topBar: UIStackView!
    @IBOutlet weak private var _mainBack: UIButton!
    @IBOutlet weak private var _title: UILabel!
    @IBOutlet weak private var _mainContent: SwapView!
    @IBOutlet weak private var _bottom0: UIView!
    public var topBar: UIStackView { return _topBar }
    public var mainBack: UIButton { return _mainBack }
    public var title: UILabel { return _title }
    public var mainContent: SwapView { return _mainContent }
    public var bottom0: UIView { return _bottom0 }

}
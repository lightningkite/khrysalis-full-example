//
// ExampleContentBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ExampleContentBinding: XibView {

    @IBOutlet weak private var _chainedNumber: UILabel!
    @IBOutlet weak private var _scrollToTop: UIButton!
    @IBOutlet weak private var _chainedIncrement: UIButton!
    @IBOutlet weak private var _scrollView: UIScrollView!
    @IBOutlet weak private var _exampleContentNumber: UILabel!
    @IBOutlet weak private var _exampleContentIncrement: UIButton!
    public var chainedNumber: UILabel { return _chainedNumber }
    public var scrollToTop: UIButton { return _scrollToTop }
    public var chainedIncrement: UIButton { return _chainedIncrement }
    public var scrollView: UIScrollView { return _scrollView }
    public var exampleContentNumber: UILabel { return _exampleContentNumber }
    public var exampleContentIncrement: UIButton { return _exampleContentIncrement }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
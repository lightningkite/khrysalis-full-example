//
// PreviewBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class PreviewBinding: XibView {

    @IBOutlet weak private var _viewName: UILabel!
    @IBOutlet weak private var _pager: UICollectionView!
    public var viewName: UILabel { return _viewName }
    public var pager: UICollectionView { return _pager }

}
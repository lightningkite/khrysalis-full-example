//
// MultipleDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class MultipleDemoBinding: XibView {

    @IBOutlet weak private var _list: UICollectionView!
    public var list: UICollectionView { return _list }

}
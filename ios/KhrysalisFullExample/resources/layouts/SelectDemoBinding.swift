//
// SelectDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class SelectDemoBinding: XibView {

    @IBOutlet weak private var _list: UICollectionView!
    public var list: UICollectionView { return _list }

}
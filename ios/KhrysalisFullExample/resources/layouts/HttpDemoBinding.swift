//
// HttpDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class HttpDemoBinding: XibView {

    @IBOutlet weak private var _progress: UIProgressView!
    @IBOutlet weak private var _items: UICollectionView!
    public var progress: UIProgressView { return _progress }
    public var items: UICollectionView { return _items }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
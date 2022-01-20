//
// WebsocketDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class WebsocketDemoBinding: XibView {

    @IBOutlet weak private var _items: UICollectionView!
    @IBOutlet weak private var _input: UITextField!
    @IBOutlet weak private var _submit: UIButton!
    public var items: UICollectionView { return _items }
    public var input: UITextField { return _input }
    public var submit: UIButton { return _submit }

    override public func awakeFromNib() {
        super.awakeFromNib()
        
    }
}
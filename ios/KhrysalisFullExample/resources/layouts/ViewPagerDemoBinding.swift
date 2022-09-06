//
// ViewPagerDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class ViewPagerDemoBinding: XibView {

    @IBOutlet weak private var _viewPager: UICollectionView!
    public var viewPager: UICollectionView { return _viewPager }
    
    public override func selectNibName() -> String {
       
        return "ViewPagerDemoBinding"
    }

}
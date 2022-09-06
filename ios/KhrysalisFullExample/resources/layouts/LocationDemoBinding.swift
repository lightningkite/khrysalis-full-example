//
// LocationDemoBinding.swift
// Created by Android Xml to iOS Xib Translator
//

import XmlToXibRuntime
import UIKit

public class LocationDemoBinding: XibView {

    @IBOutlet weak private var _getLocation: UIButton!
    @IBOutlet weak private var _locationDisplay: UILabel!
    public var getLocation: UIButton { return _getLocation }
    public var locationDisplay: UILabel { return _locationDisplay }
    
    public override func selectNibName() -> String {
       
        return "LocationDemoBinding"
    }

}
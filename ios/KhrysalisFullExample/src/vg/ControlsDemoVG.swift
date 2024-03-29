// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation
import XmlToXibRuntime

public final class ControlsDemoVG : ViewGenerator, HasTitle {
    public init() {
        self.text = ValueSubject("")
        self.options = ValueSubject(["Apple", "Banana", "Chili Pepper", "Dragon Fruit"])
        self.number = ValueSubject(32)
        self.isOn = ValueSubject(false)
        //Necessary properties should be initialized now
    }
    
    public var title: String {
        get { return "Controls Demo" }
    }
    
    public let text: ValueSubject<String>
    public let options: ValueSubject<Array<String>>
    public let number: ValueSubject<Int>
    public let isOn: ValueSubject<Bool>
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = ControlsDemoBinding()
        let view = xml.root
        
        self.isOn
            .bind(xml.check)
            .bind(xml.toggleSwitch)
            .bind(xml.checkAlt)
        self.number.map { (it) -> Bool in it > 5 }.subscribeAutoDispose(xml.checkAlt, \UIControl.isEnabled)
        self.number.toSubjectString().bind(xml.numberText)
        self.text
            .bind(xml.editableText)
            .bind(xml.editableAutoText)
            .bind(xml.editableTextBig)
            .subscribeAutoDispose(xml.editableTextCopy, \UILabel.text)
            .subscribeAutoDispose(xml.toggleSwitch, \LabeledToggle.label.text)
        self.options
            .showIn(xml.editableAutoText, onItemSelected: self.text)
            .showIn(xml.spinner, selected: self.text)
        
        return view
    }
}


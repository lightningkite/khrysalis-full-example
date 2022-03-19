// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation
import Cosmos

public class SliderDemoVG : ViewGenerator {
    public init() {
        let ratio: ValueSubject<Float> = ValueSubject(0)
        self.ratio = ratio
        //Necessary properties should be initialized now
        self.percent = self.ratio.map(read: { (it) -> Int in Int((it * 100)) }, write: { (it) -> Float in Float(it) / 100 })
        self.obsRatingInt = self.ratio.map(read: { (it) -> Int in Int((it * 5)) }, write: { (it) -> Float in Float(it) / 5 })
        self.obsRatingFloat = self.ratio.map(read: { (it) -> Float in it * 5 }, write: { (it) -> Float in it / 5 })
    }
    
    public var titleString: String {
        get { return "Slider Demo" }
    }
    
    public let ratio: ValueSubject<Float>
    public var percent: (Subject<Int>)!
    public var obsRatingInt: (Subject<Int>)!
    public var obsRatingFloat: (Subject<Float>)!
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = SliderDemoBinding()
        let view = xml.root
        
        xml.slider.maximumValue = Float(100 - 0);
        self.percent.bind(xml.slider)
        self.percent.subscribeAutoDispose(xml.valueDisplay, { (this, it) -> Void in xml.valueDisplay.text = String(kotlin: it) })
        //        xml.progress.max = 10000;
        self.ratio.subscribeAutoDispose(xml.progress, \UIProgressView.progress)
        
        xml.rating.settings.totalStars = 5
        
        self.obsRatingInt.toSubjectFloat().bind(xml.rating)
        xml.ratingDisplayStars.settings.totalStars = 5
        self.obsRatingInt.toSubjectFloat().bind(xml.ratingDisplayStars)
        xml.ratingDisplayStarsSmall.settings.totalStars = 5
        self.obsRatingInt.toSubjectFloat().bind(xml.ratingDisplayStarsSmall)
        
        self.obsRatingInt.subscribeAutoDispose(xml.ratingDisplayNumber, { (this, it) -> Void in xml.ratingDisplayNumber.text = String(kotlin: it) })
        
        
        xml.ratingFloat.settings.totalStars = 5
        self.obsRatingFloat.subscribeAutoDispose(xml.ratingFloat, { (this, it) -> Void in xml.ratingFloat.rating = Double(it) })
        xml.ratingDisplayStarsFloat.settings.totalStars = 5
        self.obsRatingFloat.subscribeAutoDispose(xml.ratingDisplayStarsFloat, { (this, it) -> Void in xml.ratingDisplayStarsFloat.rating = Double(it) })
        xml.ratingDisplayStarsSmallFloat.settings.totalStars = 5
        self.obsRatingFloat.subscribeAutoDispose(xml.ratingDisplayStarsSmallFloat, { (this, it) -> Void in xml.ratingDisplayStarsSmallFloat.rating = Double(it) })
        self.obsRatingFloat.subscribeAutoDispose(xml.ratingDisplayNumberFloat, { (this, it) -> Void in xml.ratingDisplayNumberFloat.text = String(kotlin: it) })
        
        return view
    }
}


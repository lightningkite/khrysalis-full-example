// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation

public final class ExampleContentVG : ViewGenerator, HasTitle {
    public init() {
        self.number = ValueSubject(0)
        self.chained = ValueSubject(ValueSubject(0))
        //Necessary properties should be initialized now
    }
    
    public var title: String {
        get { return "Example Content" }
    }
    
    public let number: ValueSubject<Int>
    public let chained: ValueSubject<ValueSubject<Int>>
    
    public func increment() -> Void {
        let temp43 = self.number
        temp43.value = self.number.value + 1
    }
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = ExampleContentBinding()
        let view = xml.root
        
        Observable<Int>.interval(RxTimeInterval.milliseconds(Int(1000)), scheduler: MainScheduler.instance)
            .doOnDispose { () -> Void in print("KILLING LISTENER") }
            .subscribe(onNext: { (it) -> Void in
            print("HEY LISTEN")
            xml.incrementingNumber.text = String(kotlin: it)
        }, onCompleted: { () -> Void in xml.incrementingNumber.text = "All done!" })
            .disposed(by: xml.incrementingNumber.removed)
        
        xml.exampleContentIncrement.onClick(disabledMilliseconds: 0) { () -> Void in self.increment() }
        self.number
            .map { (it) -> String in String(kotlin: it) }
            .subscribeAutoDispose(xml.exampleContentNumber, \UILabel.text)
        
        xml.chainedIncrement
            .onClick(disabledMilliseconds: 0) { () -> Void in self.chained.value.value = self.chained.value.value + 1 }
        self.chained
            .flatMap { (it) -> Observable<Int> in it }
            .map { (it) -> String in String(kotlin: it) }
            .subscribeAutoDispose(xml.chainedNumber, \UILabel.text)
        
        xml.scrollToTop.onClick { () -> Void in xml.scrollView.setContentOffset(CGPoint(x: CGFloat(0), y: CGFloat(0)), animated: true) }
        return view
    }
}


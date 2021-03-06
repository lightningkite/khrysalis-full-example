// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation

public class MainVG : ViewGenerator, EntryPoint {
    public init() {
        let stack: ValueSubject<Array<ViewGenerator>> = ValueSubject(([] as Array<ViewGenerator>))
        self.stack = stack
        //Necessary properties should be initialized now
        self.shouldBackBeShown = self.stack.map { (it) -> Bool in it.count > 1 }
        self.stack.push(SelectDemoVG(stack: self.stack))
    }
    
    public var titleString: String {
        get { return "Main" }
    }
    
    public let stack: ValueSubject<Array<ViewGenerator>>
    public var mainStack: ValueSubject<Array<ViewGenerator>>? {
        get { return self.stack }
    }
    public var shouldBackBeShown: (Observable<Bool>)!
    
    
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = MainBinding()
        let view = xml.root
        
        helloWorld()
        
        self.stack.showIn(xml.mainContent, dependency: dependency)
        
        self.stack
            .map { (it) -> String in (it.last?.titleString).map { temp149 in temp149 } ?? "" }
            .subscribeAutoDispose(xml.title, \UILabel.text)
        
        self.shouldBackBeShown
            .subscribeAutoDispose(xml.mainBack, \UIView.visible)
        
        xml.mainBack.onClick { () -> Void in self.stack.pop() }
        
        return view
    }
    
    public func handleDeepLink(schema: String, host: String, path: String, params: Dictionary<String, String>) -> Void {
        self.stack.push(ExampleContentVG())
    }
    
}


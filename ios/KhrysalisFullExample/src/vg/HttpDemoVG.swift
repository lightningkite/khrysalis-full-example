// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation

public final class HttpDemoVG : ViewGenerator, HasTitle {
    public init() {
        //Necessary properties should be initialized now
    }
    
    
    
    public var title: String {
        get { return "Http Demo" }
    }
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = HttpDemoBinding()
        let view = xml.root
        
        //--- Call
        let call = HttpClient.INSTANCE.callWithProgress(url: "https://jsonplaceholder.typicode.com/posts/") { (it) -> Single<Array<Post>> in (it.readJson() as Single<Array<Post>>) }
        
        //--- Set Up xml.progress
        call.map { (it) -> Float in it.approximate }.startWith(0)
            .subscribeAutoDispose(xml.progress, \UIProgressView.progress)
        
        //--- Set Up xml.items
        call
            .compactMap({ (it) -> Array<Post>? in it.response })
            .startWith([Post(userId: 0, id: 0, title: "Loading...", body: "-")])
            .showIn(xml.items, makeView: { (observable) -> UIView in
            //--- Make Subview For xml.items
            let cellXml = ComponentTextBinding()
            let cellView = cellXml.root
            
            //--- Set Up cellXml.label
            observable.map { (it) -> String in it.title }
                .subscribeAutoDispose(cellXml.label, \UILabel.text)
            //--- End Make Subview For xml.items
            return cellView
        })
        
        //--- Generate End (overwritten on flow generation)
        
        return view
    }
    
    //--- Init
    
    
    
    //--- Actions
    
    
    //--- Body End
}


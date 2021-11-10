// File: /home/jivie/Projects/khrysalis-full-example/android/src/main/java/com/lightningkite/rxexample/vg/WebsocketDemoVG.kt
// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation

public class WebsocketDemoVG : ViewGenerator {
    public init() {
        self.socket = HttpClient.INSTANCE.webSocket(url: "wss://echo.websocket.org").replay(1).refCount()
        self.text = ValueSubject("")
        //Necessary properties should be initialized now
    }
    
    
    
    public var titleString: String {
        get { return "Websocket Demo" }
    }
    
    public let socket: Observable<ConnectedWebSocket>
    public let text: ValueSubject<String>
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = WebsocketDemoBinding()
        let view = xml.root
        
        //--- Set Up xml.items
        var itemsList = [] as Array<WebSocketFrame>
        WebSocketFrame()
        self.socket.switchMap { (it) -> Observable<WebSocketFrame> in it.read }.map { (it) -> Array<WebSocketFrame> in
            print("Adding item")
            itemsList.append(it)
            while itemsList.count > 20 {
                itemsList.remove(at: 0)
            }
            return itemsList as! Array<WebSocketFrame>
        }.startWith(itemsList).retry().showIn(xml.items, makeView: { (observable) -> UIView in
            //--- Make Subview For xml.items (overwritten on flow generation)
            let cellXml = ComponentTextBinding()
            let cellView = cellXml.root
            
            //--- Set Up cellXml.label (overwritten on flow generation)
            Observable.just("Some Text")
                .subscribeAutoDispose(cellXml.label, \.text)
            //--- End Make Subview For xml.items (overwritten on flow generation)
            return cellView
        })
        
        //--- Set Up xml.input
        self.text.bind(xml.input)
        
        //--- Set Up xml.submit
        xml.submit.onClick { () -> Void in self.socket.take(1).subscribe(onNext: { (it) -> Void in it.onNext(WebSocketFrame(text: self.text.value)) })
            .disposed(by: xml.submit.removed) }
        
        //--- Generate End (overwritten on flow generation)
        
        return view
    }
    
    //--- Init
    
    
    
    //--- Actions
    
    
    public func submitClick() -> Void {
    }
    
    //--- Body End
}


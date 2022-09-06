// Package: com.lightningkite.rxexample.api
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import RxSwiftPlus
import Foundation

public final class APIOnline : APIInterface {
    public var baseUrl: String
    public init(baseUrl: String = "https://jsonplaceholder.typicode.com") {
        self.baseUrl = baseUrl
        //Necessary properties should be initialized now
    }
    
    public func getExamplePosts() -> Single<Array<Post>> {
        return HttpClient.INSTANCE.call(url: self.baseUrl + "/posts", method: HttpClient.INSTANCE.GET, headers: dictionaryOf()).readJson()
    }
    
}


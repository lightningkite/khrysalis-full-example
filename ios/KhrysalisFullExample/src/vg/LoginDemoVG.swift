// Package: com.lightningkite.rxexample.vg
// Generated by Khrysalis - this file will be overwritten.
import KhrysalisRuntime
import RxSwift
import UIKit
import RxSwiftPlus
import Foundation

public class LoginDemoVG : ViewGenerator {
    public var stack: ValueSubject<Array<ViewGenerator>>
    public init(stack: ValueSubject<Array<ViewGenerator>>) {
        self.stack = stack
        self.username = ValueSubject("")
        self.password = ValueSubject("")
        self.verifyPassword = ValueSubject("")
        self.agree = ValueSubject(false)
        self.loading = ValueSubject(false)
        //Necessary properties should be initialized now
    }
    
    public var titleString: String {
        get { return "Log In Demo" }
    }
    
    public let username: ValueSubject<String>
    public let password: ValueSubject<String>
    public let verifyPassword: ValueSubject<String>
    public let agree: ValueSubject<Bool>
    public let loading: ValueSubject<Bool>
    
    public func generate(dependency: ViewControllerAccess) -> UIView {
        let xml = LoginDemoBinding()
        let view = xml.root
        
        self.username.bind(xml.username)
        self.password.bind(xml.password)
        self.verifyPassword.bind(xml.verifyPassword)
        self.agree.bind(xml.agree)
        self.loading.showLoading(xml.submitLoading)
        xml.submit.onClick { () -> Void in self.submit() }
        
        return view
    }
    
    public func submit() -> Void {
        if self.username.value.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            showDialog(message: "Username cannot be blank")
            return
        }
        if self.password.value.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            showDialog(message: "Password cannot be blank")
            return
        }
        if self.verifyPassword.value.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            showDialog(message: "Verify Password cannot be blank")
            return
        }
        if self.password.value != self.verifyPassword.value {
            showDialog(message: "Passwords don't match")
            return
        }
        if (!self.agree.value) {
            showDialog(message: "You must agree to the terms")
            return
        }
        print("Submit!")
        self.loading.value = true
        DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(Int(1000)), execute: { () -> Void in
            self.loading.value = false
            self.stack.push(ExampleContentVG())
        })
    }
}


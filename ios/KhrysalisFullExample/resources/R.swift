//
// R.swift
// Created by Khrysalis
//

import Foundation
import UIKit
import XmlToXibRuntime


public enum R {
    public enum drawable {
        public static func ic_android_black_24dp() -> CALayer { return CAImageLayer(UIImage(named: "ic_android_black_24dp.png")) }
        public static func ic_arrow_back_white_24dp() -> CALayer { return CAImageLayer(UIImage(named: "ic_arrow_back_white_24dp.png")) }
        public static func ic_beach_access_black_24dp() -> CALayer { return CAImageLayer(UIImage(named: "ic_beach_access_black_24dp.png")) }
        public static func ic_exposure_black_24dp() -> CALayer { return CAImageLayer(UIImage(named: "ic_exposure_black_24dp.png")) }
        public static func ic_launcher_background() -> CALayer { return CAImageLayer(UIImage(named: "ic_launcher_background.png")) }
        public static func ic_launcher_foreground() -> CALayer { return CAImageLayer(UIImage(named: "ic_launcher_foreground.png")) }
        public static func ic_send_black_24dp() -> CALayer { return CAImageLayer(UIImage(named: "ic_send_black_24dp.png")) }
        public static func reason_expertise() -> CALayer { return CAImageLayer(UIImage(named: "reason_expertise.png")) }
        public static func test_drawable() -> CALayer { return CAImageLayer(UIImage(named: "test_drawable.png")) }
        public static let allEntries: Dictionary<String, ()->CALayer> = [
            "border": border,
            "button_accent": button_accent,
            "button_disabled": button_disabled,
            "button_primary": button_primary,
            "ic_android_black_24dp": ic_android_black_24dp,
            "ic_arrow_back_white_24dp": ic_arrow_back_white_24dp,
            "ic_beach_access_black_24dp": ic_beach_access_black_24dp,
            "ic_exposure_black_24dp": ic_exposure_black_24dp,
            "ic_launcher_background": ic_launcher_background,
            "ic_launcher_foreground": ic_launcher_foreground,
            "ic_send_black_24dp": ic_send_black_24dp,
            "reason_expertise": reason_expertise,
            "test_drawable": test_drawable
        ]
    }
    public enum string {
        public static let app_name = NSLocalizedString("Lightning Kite Rx Example", comment: "app_name")
        public static let back = NSLocalizedString("Back", comment: "back")
        public static let camera = NSLocalizedString("Camera", comment: "camera")
        public static let camera_multi = NSLocalizedString("Camera Multiple", comment: "camera_multi")
        public static let cancel = NSLocalizedString("Cancel", comment: "cancel")
        public static let check_out_my_multiple_rows = NSLocalizedString("Check out my multiple rows", comment: "check_out_my_multiple_rows")
        public static let connect = NSLocalizedString("Connect", comment: "connect")
        public static let empty = NSLocalizedString("", comment: "empty")
        public static let gallery = NSLocalizedString("Gallery", comment: "gallery")
        public static let gallery_multi = NSLocalizedString("Gallery Multiple", comment: "gallery_multi")
        public static let get_location = NSLocalizedString("Get Location", comment: "get_location")
        public static let go_to_another_screen = NSLocalizedString("Go to Another Screen", comment: "go_to_another_screen")
        public static let i_agree = NSLocalizedString("I Agree to the Terms of Service", comment: "i_agree")
        public static let i_m_a_switch = NSLocalizedString("I'm a switch!", comment: "i_m_a_switch")
        public static let increment_the_number = NSLocalizedString("Increment the Number", comment: "increment_the_number")
        public static let lorem_ipsum = NSLocalizedString("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", comment: "lorem_ipsum")
        public static let lorem_pixel = NSLocalizedString("Lorem Pixel", comment: "lorem_pixel")
        public static let mustAgree = NSLocalizedString("You must agree to the terms of service.", comment: "mustAgree")
        public static let ok = NSLocalizedString("OK", comment: "ok")
        public static let password = NSLocalizedString("Password", comment: "password")
        public static let play_video = NSLocalizedString("Play video", comment: "play_video")
        public static let select_demo = NSLocalizedString("Select Demo", comment: "select_demo")
        public static let submit = NSLocalizedString("Submit", comment: "submit")
        public static let text_field = NSLocalizedString("Text Field", comment: "text_field")
        public static let this_data_is_loaded_from_json_placeholder_typicode = NSLocalizedString("This data is loaded from JSON Placeholder Typicode.", comment: "this_data_is_loaded_from_json_placeholder_typicode")
        public static let username = NSLocalizedString("Username", comment: "username")
        public static let verify_password = NSLocalizedString("Verify Password", comment: "verify_password")
        public static let welcome = NSLocalizedString("Welcome!", comment: "welcome")
        public static let welcome_message = NSLocalizedString("This an example for LK Rx. This screen exists to help you figure out stuff about it.", comment: "welcome_message")
        public static let welcome_to_switch_town = NSLocalizedString("Welcome to Switch Town!", comment: "welcome_to_switch_town")
        public static let you_made_it_to_another_screen = NSLocalizedString("You made it to another screen!", comment: "you_made_it_to_another_screen")
    }
    public enum dimen {
    }
    public enum color {
        public static let calendar_range_middle_deactivated_bg: UIColor = UIColor(named: "color_calendar_range_middle_deactivated_bg")!
        public static let calendar_range_middle_unavailable_bg: UIColor = UIColor(named: "color_calendar_range_middle_unavailable_bg")!
        public static let calendar_selected_day_bg: UIColor = UIColor(named: "color_calendar_selected_day_bg")!
        public static let calendar_selected_range_bg: UIColor = UIColor(named: "color_calendar_selected_range_bg")!
        public static let calendar_unavailable_bg: UIColor = UIColor(named: "color_calendar_unavailable_bg")!
        public static let colorAccent: UIColor = UIColor(named: "color_colorAccent")!
        public static let colorAccentDark: UIColor = UIColor(named: "color_colorAccentDark")!
        public static let colorPrimary: UIColor = UIColor(named: "color_colorPrimary")!
        public static let colorPrimaryDark: UIColor = UIColor(named: "color_colorPrimaryDark")!
        public static let colorPrimaryDarker: UIColor = UIColor(named: "color_colorPrimaryDarker")!
        public static let disabled: UIColor = UIColor(named: "color_disabled")!
        public static let state_accent: UIColor = UIColor(named: "color_state_accent")!
        public static let state_accentState: StateSelector<UIColor> = StateSelector(normal: R.color.colorAccent, selected: nil, highlighted: nil, disabled: R.color.disabled, focused: nil)
        public static let state_accent_toggle: UIColor = UIColor(named: "color_state_accent_toggle")!
        public static let state_accent_toggleState: StateSelector<UIColor> = StateSelector(normal: R.color.disabled, selected: R.color.colorAccent, highlighted: nil, disabled: R.color.disabled, focused: nil)
        public static let state_login_text: UIColor = UIColor(named: "color_state_login_text")!
        public static let state_login_textState: StateSelector<UIColor> = StateSelector(normal: R.color.colorPrimary, selected: nil, highlighted: nil, disabled: R.color.disabled, focused: nil)
        public static let state_primary: UIColor = UIColor(named: "color_state_primary")!
        public static let state_primaryState: StateSelector<UIColor> = StateSelector(normal: R.color.colorPrimary, selected: nil, highlighted: nil, disabled: R.color.disabled, focused: nil)
    }
}

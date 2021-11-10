import XmlToXibRuntime
public extension R.drawable {
    static func button_accent() -> CALayer {
        LayerMaker.state(.init(
                normal: LayerMaker.rect(
                    fillColor: R.color.colorAccent, 
                    strokeColor: .clear, 
                    strokeWidth: 0, 
                    topLeftRadius: 3.0, 
                    topRightRadius: 3.0, 
                    bottomLeftRadius: 3.0, 
                    bottomRightRadius: 3.0
                )
                ,
                selected: nil,
                highlighted: LayerMaker.rect(
                    fillColor: R.color.colorAccentDark, 
                    strokeColor: .clear, 
                    strokeWidth: 0, 
                    topLeftRadius: 3.0, 
                    topRightRadius: 3.0, 
                    bottomLeftRadius: 3.0, 
                    bottomRightRadius: 3.0
                )
                ,
                disabled: LayerMaker.rect(
                    fillColor: R.color.disabled, 
                    strokeColor: .clear, 
                    strokeWidth: 0, 
                    topLeftRadius: 3.0, 
                    topRightRadius: 3.0, 
                    bottomLeftRadius: 3.0, 
                    bottomRightRadius: 3.0
                )
                ,
        focused: nil))
    }
}

import XmlToXibRuntime
public extension R.drawable {
    static func border() -> CALayer {
        LayerMaker.state(.init(
                normal: LayerMaker.rect(
                    fillColor: UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0), 
                    strokeColor: R.color.disabled, 
                    strokeWidth: 1.0, 
                    topLeftRadius: 3.0, 
                    topRightRadius: 3.0, 
                    bottomLeftRadius: 3.0, 
                    bottomRightRadius: 3.0
                )
                ,
                selected: nil,
                highlighted: LayerMaker.rect(
                    fillColor: R.color.disabled, 
                    strokeColor: R.color.disabled, 
                    strokeWidth: 1.0, 
                    topLeftRadius: 3.0, 
                    topRightRadius: 3.0, 
                    bottomLeftRadius: 3.0, 
                    bottomRightRadius: 3.0
                )
                ,
                disabled: LayerMaker.rect(
                    fillColor: R.color.disabled, 
                    strokeColor: R.color.disabled, 
                    strokeWidth: 1.0, 
                    topLeftRadius: 3.0, 
                    topRightRadius: 3.0, 
                    bottomLeftRadius: 3.0, 
                    bottomRightRadius: 3.0
                )
                ,
        focused: nil))
    }
}

import {MainVG} from './vg/MainVG'
import './resources/resources.scss'
import '@lightningkite/rxjs-plus/index.scss'
document.body.appendChild(new MainVG().generate(window))

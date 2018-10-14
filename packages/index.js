/**
 * Created by chang on 2018/10/14.
 */
import chooseItem from './choose-item/choose-item'

const components = [chooseItem]

const install = function (Vue) {
    // 是否安装
    if (install.installed) return
    components.map( item => {
        return Vue.component(item.name, item)
    })
}

if (typeof window !== undefined && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    chooseItem
}
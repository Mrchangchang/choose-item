/**
 * Created by chang on 2018/10/14.
 */
import chooseItem from './choose-item.vue'

const  install = function (vue) {
    return vue.components(chooseItem.name, chooseItem)
}

export default chooseItem
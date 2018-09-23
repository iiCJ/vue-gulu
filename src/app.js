import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-header',Header),
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-layout',Layout)
Vue.component('g-toast',Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: '123',
        selectedTab: ['2','1']
    },
    methods: {
        inputChange(e) {
        },
        showToast(){
            this.$toast('11111')
        },
        yyy(data){
            console.log('yyy')
        },
    }
});
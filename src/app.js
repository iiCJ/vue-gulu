import Vue from 'vue'
import Buttom from './button'
import Icon from './icon'
import  ButtonGroup from './g-button-group'

Vue.component('g-button', Buttom);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
});
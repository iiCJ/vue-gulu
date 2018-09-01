import  Vue from 'Vue'
import  Buttom from './button'

Vue.component('g-button',Buttom);

new Vue({
    el: '#app',
    data: {
        message: 'hi'
    }
});
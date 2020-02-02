import Vue from 'vue'

const install = (Vue) => {
    Vue.prototype.$test = Vue.prototype.$test || {};
}

install(Vue);

export default install;
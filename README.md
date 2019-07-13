# Basics
## Syntax
- For object: v-for="(val, key) in object"
- For array: v-for="(item, index) in array"
## Theory
- Reactive data: v-model is 2-way binding
- DOM abstraction --> higher performance (virtual DOM, do not render all the page but render only the changes. watch changes in virtual DOM and update changes before template mount to real DOM)
- Vue life cycle
- Vue directives: v-text, v-html
- Vue.filter
- computed: filter a list, sort a list, bind style inline, used when we want to update something realtime
- @keypress.enter (@event.button)
- $refs, $nextTick
- router: {path: '', component: ()=> import(''), meta: {rule: 'editor'}}
- dynamic component:
<component :is''>
- v-model.lazy: not change input realtime but change when input is blur
        .number: force to convert into number
- @input="data = $event.target.value"
- :class='[{'class-name : true'}]
- this.$event.filre('')
- this.$router.push('')
- watch: {'$router'() {} }
- computed can have get() andn set()
### vue-router
- router-link to, tag, :id
- this.$router.params.id
- use watch for $router as Vue do not recreate component if nothing inside changes
'$route'(to, from) {}
### Vuex
- Central management
- used many times in many components
- Mutation has to be synchronous due to realiable --> change the state immediately
- Action: execute async code before commit change
    + Commit: always sync
### Communication between components
- Parents --> children: props
default() {return{}}
- Children --> parents: emit an event, Vuex, eventbus
this.$emit('eventName', data)
@eventNam='func(@event)'
### transition
### mixin
- shared code among components
- not share memory among components
### Directives
- bind(el, binding, vnode) --> once directive is attached
- ubind
### ???
- render(h)
- @click.stop
### vue-cli
vue init <template_name> <project_name>
# Tips
- Divide components before coding (based on header-body-footer)
- Chrome Extension: Vuejs devtool
- VS Extension: vetur, auto rename tag, auto close tag, bracket pair, vue peek, vue 2 snippets
- package.json: vue-router, vuex, vue-i18n (for localize), vuedraggable, vuejs-datepicker, vue-select, veevalidate, vue-perfect-scrollbar, vue-feather-icons, vuepress, vuesax, axios, nprogress, vue-backtotop, vue2-goole-map, algolia-instant-search, firebase, acl (access controller), AuthPlugin, VueTour, VeeValidate, PrismJS, VueClipboard, vue-context, vue-fullcalendar, vue-tabes-2, vue-chartjs, echarts, apexchart, material-icons, tailwindcss, prismjs, 
- globalComponents.js --> register components globally
- globalFunctions.js

# JS
- remove item from array: arr.splice(index,1)
- css ...: text-overflow, o-hide, w-nowrap
- item.hasOwnProperty('key'): check if has a key
- xhr.open('POST', action)
- transform: rotate(45deg), -moz, -webkit, -o, -ms
- max length in array: arr.reduce( (a,b) => {return a.length > b.length ? a : b})
// var dataModel = {
// 	title: "Title",
//     one: "component1",
//     two: "component2"
// };

// var MyComponent_one = Vue.extend({
//     template: '<p v-on="click:rewrite">{{data.one}}</p>',
//     props: ['data'],
//     methods:{
//     	rewrite: function(){
//         	this.data.one = "rewrite";
//         }
//     }
// });

// var MyComponent_two = Vue.extend({
//     template: '<p v-on="click:rewrite">{{data.two}}</p>',
//     props: ['data'],
//     methods:{
//     	rewrite: function(){
//         	this.data.two = "rewrite";
//         }
//     }
// });

// var mainViewModel = new Vue({
//     el: ".main",
//     data: dataModel,
//     methods: {
//         output: function(){
//             $('.output').html(this.$data.one + " " + this.$data.two);
//         }
//     },
//     components: {
//         "my-component-one": MyComponent_one,
//         "my-component-two": MyComponent_two
//     }
// });
$(function() {
Vue.component('some-component', {
    props: ['n'],
    template: '#component_template',
    ready: function() {
      this.on_some_event();
    },
    methods: {
       on_some_event: function() {
       	  console.log('Component: ' + this.n);
       }
    }
});
            
var demo = new Vue({
  el: '#demo'
});
})

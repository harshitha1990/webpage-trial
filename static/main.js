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
    // Vue.component('some-component', {
    // 	props: ['n'],
    // 	template: '#component_template',
    // 	ready: function() {
    // 	    this.on_some_event();
    // 	},
    // 	methods: {
    // 	    on_some_event: function() {
    //    		console.log('Component: ' + this.n);
    // 	    }
    // 	}
    // });

    Vue.component('slideshow-component', {
	template: '#slideshow-component',
	props: ["images", "currentimage", "path"],
	ready: function() {
	    this.startSlideShow();
	},
	methods: {
	    startSlideShow: function() {
		var self = this;
		var thumbnailsLength = self.images.length;
		var removeIterator = 0;
		var addIterator = 1;
       		var hightlightThumbnail = function() {
		    if (addIterator === thumbnailsLength || addIterator === 0) {
			addIterator = 1;
		    } else {
			addIterator += 1;
		    }

		    if (addIterator === 1) {
			removeIterator = thumbnailsLength;
		    } else {
			removeIterator = addIterator - 1;
		    }	     
		    $(".thumbnail-item:nth-child(" + removeIterator + ")").removeClass("hightlight-thumbnail");
		    $(".thumbnail-item:nth-child(" + addIterator + ")").addClass("hightlight-thumbnail");
		    self.currentImage = self.images[addIterator-1];
		}
		$(".thumbnail-item:nth-child(1)").addClass("hightlight-thumbnail");

		setInterval(hightlightThumbnail, 2000);
	    }
	}
    });
    
    var demo = new Vue({
	el: '#main-container',
	data: function() {
	    return {
		images: [
		    {
			imgName: '1.jpg',
			title: 'Building 1111111',
			description: 'Buildings are tall'  
		    },
		    {
			imgName: '2.jpg',
			title: 'Building 2222222',
			description: 'Buildings are tall'
		    },
		    {
			imgName: '3.jpg',
			title: 'Building 3',
			description: 'Buildings are tall'
		    },
		    {
			imgName: '4.jpg',
			title: 'Building 4',
			description: 'Buildings are tall'
		    },
		],
		path: './static/images/'
	    }
	},
	methods: {
	    getDefaultImage: function() {
		return this.images[0];
	    }
	}
    });
});

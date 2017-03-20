$(function() {
    $(".popup img").attr("src", "./static/images/1.jpg");
    $(".popup").css("visibility", "hidden");
    $(".close").click(function() {
	$(".container-two img").removeClass("hightlight-thumbnail");
	$(".popup").hide();
    })
    var showPopup = function(imgName) {
	$(".popup img").attr('src', imgName);
	$(".popup").css("visibility", "visible");
	$(".popup").show();
    }
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
		    self.currentimage = self.images[addIterator-1];
		}
		$(".thumbnail-item:nth-child(1)").addClass("hightlight-thumbnail");

		setInterval(hightlightThumbnail, 2000);
	    }
	}
    });

    Vue.component('one-component', {
	template: '#one-component',
	props: ["tabs"],
	ready: function() {
	    this.startSlideShow();
	},
	methods: {
	    startSlideShow: function() {
		// alert("worked!!!");
	    }
	}
    });

     Vue.component('two-component', {
	template: '#two-component',
	 props: ["tabs","path"],
	methods: {
	    startSlideShow: function(event) {
		var self = this;
		$(".container-two img").removeClass("hightlight-thumbnail");
		var ev = $(event.target)
		$(ev).addClass("hightlight-thumbnail");
		showPopup($(ev).attr("src"));
	    }
	}
     });

    Vue.component('third-component', {
	template: '#third-component',
	 props: ["tabs","path"],
	methods: {
	    startSlideShow: function(event) {
		var id = event.target.id;
		$("#"+ id + "-content").slideToggle("slow");
	    }
	}
    });

    Vue.component('news-component', {
	template: '#news-component',
	 props: ["tabs","path"],
	methods: {
	    startSlideShow: function(event) {
		var self = this;
		var ev = $(event.target)
		showPopup($(ev).attr("src"));
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
			title: 'First picture',
			description: 'This image talks about nature'  
		    },
		    {
			imgName: '2.jpg',
			title: 'Second picture',
			description: 'This image talks about mountains'
		    },
		    {
			imgName: '3.jpg',
			title: 'Third picture',
			description: 'This image talks about tower'
		    },
		    {
			imgName: '4.jpg',
			title: 'Fourth picture',
			description: 'This image talks about tall buildings'
		    },
		],
		tabsOne: ["tab1", "tab2", "tab3", "tab4"],
		tabsTwo: ['1.jpg', '2.jpg'],
		news: [
		    {
			imgName: '1.jpg',
			title: 'First picture',
			description: 'This image talks about nature'  
		    },
		    {
			imgName: '2.jpg',
			title: 'Second picture',
			description: 'This image talks about mountains'
		    },
		    {
			imgName: '3.jpg',
			title: 'Third picture',
			description: 'This image talks about tower'
		    },
		    {
			imgName: '4.jpg',
			title: 'Fourth picture',
			description: 'This image talks about tall buildings'
		    },
		     {
			imgName: '1.jpg',
			title: 'First picture',
			description: 'This image talks about nature'  
		    },
		    {
			imgName: '2.jpg',
			title: 'Second picture',
			description: 'This image talks about mountains'
		    },
		    {
			imgName: '3.jpg',
			title: 'Third picture',
			description: 'This image talks about tower'
		    },
		    {
			imgName: '4.jpg',
			title: 'Fourth picture',
			description: 'This image talks about tall buildings'
		    },
		    {
			imgName: '4.jpg',
			title: 'Fourth picture',
			description: 'This image talks about tall buildings'
		    }
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

$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[

			{
			'title' : 'Portfolio',
			'description'   : 'My first personal website portfolio. Went through many different iterations of it. Technologies - C#, ASP.Net Core, HTML/CSS, JavaScript, Animate.CSS, Bootstrap, JQuery and GoogleAPI.',
			'thumbnail' : ['img/portfolio/small/port2.jpg', 'img/portfolio/small/port1.jpg', 'img/portfolio/small/port3.jpg', 'img/portfolio/small/port4.jpg'],
			'large' : ['img/portfolio/large/port2.jpg', 'img/portfolio/large/port1.jpg', 'img/portfolio/large/port3.jpg', 'img/portfolio/large/port4.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://michaelquon.com' },
			{ 'title':'Download', 'url':'https://github.com/michaelquon/quonPortfolio.git'}
			],
			'tags'  : ['Design','C#','All']
			},

			{
			'title' : 'Finder',
			'description'   : 'A web-application that allows for users to search for local events they are interested in and join in. User would create an event and set a time, others would browse activites and join in on the event. Plans are in the works to make this a mobile application. Technologies - Python, Django, SQLite and GoogleAPI',
			'thumbnail' : ['img/portfolio/small/finder.jpg', 'img/portfolio/small/finder2.jpg', 'img/portfolio/small/finder3.jpg', 'img/portfolio/small/finder4.jpg'],
			'large' : ['img/portfolio/large/finder.jpg', 'img/portfolio/large/finder2.jpg', 'img/portfolio/large/finder3.jpg', 'img/portfolio/large/finder4.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'https://shikari.me/finder/' },
			{ 'title':'Download', 'url':'https://github.com/michaelquon/projectFinder'}
			],
			'tags'  : ['Design','Python','All']
			},

			{
			'title' : 'C.O.L.D',
			'description'   : 'A project designed to address a common need for biomedical research laboratories, tracking laboratory samples, the freezers/storage units that contain them, and the laboratories than contain them. Technologies - MongoDB, Express.js, Angular.CLI, Node.js and NoSQL',
			'thumbnail' : ['img/portfolio/small/cold1.jpg', 'img/portfolio/small/cold2.jpg', 'img/portfolio/small/cold3.jpg', 'img/portfolio/small/cold4.jpg'],
			'large' : ['img/portfolio/large/cold1.jpg', 'img/portfolio/large/cold2.jpg', 'img/portfolio/large/cold3.jpg', 'img/portfolio/large/cold4.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://34.209.90.87/login' },
			{ 'title':'Download', 'url':'https://github.com/michaelquon/coldProject'}
			],
			'tags'  : ['Design','MEAN','All']
			},

			{
			'title' : 'CleanUp',
			'description'   : 'A community-oriented mobile application to help users to organize around keeping their neighborhood  clear of litter. Technologies - ASP.NET Core, MySQL, Entity, SignalR, GoogleAPI',
			'thumbnail' : ['img/portfolio/small/cleanup1.jpg', 'img/portfolio/small/cleanup2.jpg', 'img/portfolio/small/cleanup3.jpg'],
			'large' : ['img/portfolio/large/cleanup1.jpg', 'img/portfolio/large/cleanup2.jpg', 'img/portfolio/large/cleanup3.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'https://github.com/dmitrii-codes/cleanup2.0'}
			],
			'tags'  : ['Design','C#','All']
			},


	 
		]
	});
});
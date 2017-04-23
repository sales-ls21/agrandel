"use strict";

var app = angular.module("agrandel", ["ngRoute"]);

// let isAuth = function(authFactory){
// 	return new Promise ((resolve, reject)=>{
// 		authFactory.isAuthenticated()
// 		.then((user)=>{
// 			if(user){
// 				resolve();
// 			} else{
// 				reject();
// 			}
// 		});
// 	});
// };

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/landing.html",
		controller: "homeCtrl"
	})
	.when("/organigrama", {
		templateUrl: "partials/about.html",
		controller: "aboutCtrl"
	})
	.when("/miembros", {
		templateUrl: "partials/members.html",
		controller: "memberCtrl"
	})
	.when("/noticias", {
		templateUrl: "partials/news.html",
		controller: "newsCtrl"
	})
	.when("/contactos", {
		templateUrl: "partials/contact.html",
		controller: "contactCtrl"
	})
	.when("/fotos", {
		templateUrl: "partials/gallery.html",
		controller: "galleryCtrl"
	})
	.when("/blog-post", {
		templateUrl: "partials/blog_post.html",
		controller: "blogpostCtrl"
	})
	.otherwise("/");
}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});

// app.run( ($location, FBConfig)=>{
// 	let authConfig = {
// 		apiKey: FBConfig.apiKey,
// 		authDomain: FBConfig.authDomain,
// 		databaseURL: FBConfig.databaseURL,
// 		storageBucket: FBConfig.storageBucket
// 	};
// 	firebase.initializeApp(authConfig);
// });
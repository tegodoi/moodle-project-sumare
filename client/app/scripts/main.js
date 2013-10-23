require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery.min',
		bootstrap: '../bower_components/bootstrap/docs/assets/js/bootstrap.min'
	},
	shim: { 'bootstrap': { deps: ['jquery'] } },
	exports: {
		login: '../scripts/login'
	}
});

require(['app', 'jquery', 'bootstrap'], function (app, $, bootstrap) {
	'use strict';
	// use app here
	// console.log(app);

	var redirectPage = function () {
		if (localStorage.getItem('redirect') === null) {
			localStorage.setItem('redirect', 'true');
			window.location.href = '/login.html';
		};
	}();

	var sidebarActive = function () {
		$('.sidebar-teacher ul li').on('click', function () {
			if($(this).hasClass('nav-header')) return false;
			$('.sidebar-teacher ul li').removeClass('active');
			$(this).addClass('active');
		});
	}();

	$('#submitLogin').on('click', function () {
		var user = $('#username'),
			pass = $('#password');

		if (user.val() !== '' || pass.val() !== '') {
			alert('não tenho o  que faze');
		} else {
			window.location = 'restricted_teacher.html';
		}
	});
});

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

	$('#submitLogin').on('click', function () {
		var user = $('#username'),
			pass = $('#password');

		if (user.val() === '' || pass.val() === '') {
			alert('não tenho o  que faze');
		} else {
			window.location = '/';
		}
	});
});

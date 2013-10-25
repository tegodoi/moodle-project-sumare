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

	var createTopic = function () {
		$('.createTopic').on('click', function () {
			var textTopic = $('.input-append').find('input').val(),
				lengthAccordion = $('#accordion2').find('.accordion-group').size(),
				accordionGroup = $('#accordion2');

			var templateAccordion = '<div class="accordion-group">';
				templateAccordion += '\t<div class="accordion-heading">';
				templateAccordion += '\t\t<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse'+(lengthAccordion+1)+'">'+(textTopic)+'</a>';
				templateAccordion += '\t</div>';
				templateAccordion += '\t<div id="collapse'+(lengthAccordion+1)+'" class="accordion-body collapse">';
				templateAccordion += '\t\t<div class="accordion-inner">';
				templateAccordion += '<a href="#"><i class="icon-wrench"></i>Editar conteúdo </span></a>';
				templateAccordion += '\t\t<button class="btn btn-small" type="button">Criar atividade</button>';
				templateAccordion += '\t\t</div>';
				templateAccordion += '\t</div>';
				templateAccordion += '</div>';
			
			if (textTopic === '' || textTopic === undefined) {
				$('.input-append').find('input').attr('placeholder', 'Preencha a descrição do campo.');
				return false;
			} else {
				accordionGroup.append(templateAccordion);
			};
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

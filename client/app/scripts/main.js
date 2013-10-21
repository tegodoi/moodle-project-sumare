require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery.min',
        bootstrap: '../bower_components/bootstrap/docs/assets/js/bootstrap.min'
    },
    shim: { 'bootstrap': { deps: ['jquery'] } }
});

require(['app', 'jquery', 'bootstrap'], function (app, $, bootstrap) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});

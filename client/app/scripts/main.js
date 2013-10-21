require.config({
    paths: {
        jquery: '../bower_components/bootstrap/docs/assets/js/jquery'
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});

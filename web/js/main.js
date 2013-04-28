(function() {

  require.config({
    shim: {

      'jquery': {
        exports: '$'
      }

    },
    paths: {
      'jquery': 'vendor/jquery-1.8.2.min'
    }
  });


 require(['jquery'], function($) {
    var currentModel;
    currentModel = $('body').data('model');

    require(['app/'+ currentModel],function(app){
      app.init();
    });
});


}).call(this);

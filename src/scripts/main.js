requirejs.config({
  baseUrl: './scripts',
  paths: {
    'jquery': 'vendor/jquery.min',
    'module-one': 'modules/module-one'
  }
});

requirejs(['jquery', 'module-one'], function($, module_one) {
  if (window.jQuery) {
    console.log(jQuery.fn.jquery);
  }

  var message = module_one.getMessage();
  console.log(message);
});

requirejs.config({
  baseUrl: 'modules/',
});
require(['tools'], function(tools) {
  console.log('tools', tools)
})
requirejs.config({
  baseUrl: 'modules/',
});
require(['tools_umd'], function (tools) {
  console.log('tools', tools)
})
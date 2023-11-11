let myPlugins = {};

myPlugins.install = function (Vue, options) {
  //*   Vue.prototype.$bus :任何組件都能用
  //*   Vue.directive()
  Vue.directive(options.name, (element, params) => {
    element.innerHTML = params.value.toUpperCase();
  });
};

export default myPlugins;

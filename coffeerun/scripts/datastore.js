'use strict';
(function (window) {
  var App = window.App || {};
  var data = {}; // With the variable here, it is "shared" by all instances;
  function DataStore() {
    //this.data = {};
  }
  DataStore.prototype.add = function (key, val) {
    data[key] = val;
  }
  DataStore.prototype.get = function (key) {
    return data[key];
  }
  DataStore.prototype.getAll = function () {
    return data;
  }
  DataStore.prototype.remove = function (key) {
    delete data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);

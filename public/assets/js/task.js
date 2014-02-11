(function ($) {
  var Task = function (list) {
    this.list = list;
  }

  Task.prototype.init = function () {
    var list = this.list;
    [].forEach.call(list, function (item) {
      var action = item.getAttribute('data-action');
    }
  }
})(jQuery);

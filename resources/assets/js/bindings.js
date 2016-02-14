//Helpers
window.scope = function(id) {
    return angular.element(document.getElementById(id)).scope();
}

window.$A = function() {
    return window.angular.module('soquirrel');
}
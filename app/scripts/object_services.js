angular.module('sample').factory('Learning_Object', ['$resource', 'ENV', function($resource, ENV) {
    var Learning_Object;
    return Object = (function() {
      function Learning_Object(errorHandler) {
        this.service = $resource(ENV.apiEndpoint + '/users.json', {}, {
          'query': {
            method: 'GET'
          }
        });
        this.errorHandler = errorHandler;
      }

      Learning_Object.prototype.all = function() {
        return this.service.query((function() {
          return null;
        }), this.errorHandler);
      };

      return Learning_Object;

    })();
  }
]);

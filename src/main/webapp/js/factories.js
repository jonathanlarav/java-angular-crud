angular.module('ContactsApp')
    .factory('Contact', function($resource) {
        return $resource('/api/contact/:id', {id: '@id'}, {
            'update': {nmethod: 'PUT'}
        })
    });
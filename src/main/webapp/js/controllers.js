angular.module('ContactsApp')
    .controller('ListController', function ($scope, $rootScope, Contact, $location, options) {
        $rootScope.PAGE = "all";
        $scope.contacts = Contact.query();
        $scope.fields = ['firstName', 'lastName'].concat(options.displayed_fields);

        $scope.sort = function (field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;

        $scope.show = function (id) {
            $location.url('/contact/' + id);
        };
    })
    .controller('NewController', function ($scope, $rootScope, Contact, $location) {
        $rootScope.PAGE = "new";
        $scope.contact = new Contact({
            firstName: ['', 'text'],
            lastName:  ['', 'text'],
            email:     ['', 'email'],
            homePhone: ['', 'tel'],
            cellPhone: ['', 'tel'],
            birthday:  ['', 'date'],
            website:   ['', 'url'],
            address:   ['', 'text']
        });

        $scope.save = function () {
            if ($scope.newContact.$invalid) {
                $scope.$broadcast('record:invalid');
            } else {
                $scope.contact.$save();
                $location.url('/contacts');
            }
        };
    });
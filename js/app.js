var app = angular.module('MonApp', ['ngResource']);

app.controller('ContactsCtrl', function($scope, $resource) {
	var Contact = $resource('http://192.168.1.81/easycontact_api/web/app_dev.php/contact/api/')
	Contact.query()
	$scope.contacts = [
		{
			'firstname': 'Lorem',
			'lastname': 'Ipsum',
			'phone': {
				'pro': '0414433031',
				'mobile': '0630243131'
			}
		},
		{
			'firstname': 'Peebles',
			'lastname': 'Gunter',
			'phone': {
				'pro': '0214831028',
				'mobile': '0731244231'
			}
		},
		{
			'firstname': 'Marty',
			'lastname': 'McFly',
			'phone': {
				'pro': '0126551301',
				'mobile': '0690242831'
			}
		},
		{
			'firstname': 'Seamous',
			'lastname': 'McFly',
			'phone': {
				'pro': '0292563031',
				'mobile': '0630243131'
			}
		},
		{
			'firstname': 'John',
			'lastname': 'Maverick',
			'phone': {
				'pro': '04144330031',
				'mobile': '0630243131'
			}
		}
	];	
})
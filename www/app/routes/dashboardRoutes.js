/*!
 *
 * This file contains the application controllers.
 *
 * @project   VeriBranch
 * @date      27-01-2016
 * @author    VeriPark
 * @licensor  VeriPark Gulf
 * @site      www.veripark.com
 *
 */

'use strict';

/*  
 Dashboard Routes 
 */
vbApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/Dashboard', {
            templateUrl: 'app/views/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        }).
		when('/DemoVersion', {
			templateUrl: 'app/views/dashboard/demoVersion.html',
			controller: 'DashboardCtrl'
		}). 
        otherwise({
            redirectTo: '/Dashboard'
        });  
    }
]);

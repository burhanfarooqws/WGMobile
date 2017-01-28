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
 Personal Finance Management Routes 
 */ 

var vbAppPFM = angular.module('vbAppPFM', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/PFM', {
                templateUrl: 'app/views/personalfinancemanagement/goal-management.html',
                controller: 'PFMCtrl'
            }).
            when('/GoalManagement', {
                templateUrl: 'app/views/personalfinancemanagement/goal-management.html',
                controller: 'PFMCtrl'
            }).
            when('/BudgetManagement', {
                templateUrl: 'app/views/personalfinancemanagement/budget-management.html',
                controller: 'BudgetCtrl'
            }).
            otherwise({
                redirectTo: '/PFM'
            });
        }
    ]);

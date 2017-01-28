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
 Accounts Routes 
 */

var vbAppAccounts = angular.module('vbAppAccounts', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/MyAccounts', {
                templateUrl: 'app/views/accounts/my-accounts.html',
                controller: 'AccountsChartCtrl'
            }).
            when('/MyPortfolio', {
                templateUrl: 'app/views/accounts/my-portfolio.html',
                controller: 'AccountsCtrl'
            }).
            when('/TDAccountOpening', {
                templateUrl: 'app/views/accounts/TD-accounts-opening.html',
                controller: 'AccountsCtrl'
            }).
            when('/AccountOpening', {
                templateUrl: 'app/views/accounts/accounts-opening.html',
                controller: 'AccountsCtrl'
            }).
            when('/ChequeBookRequest', {
                templateUrl: 'app/views/accounts/chequebook-request.html',
                controller: 'AccountsCtrl'
            }).
            when('/PhysicalStatementRequest', {
                templateUrl: 'app/views/accounts/physical-statement-request.html',
                controller: 'AccountsCtrl'
            }).
            when('/SalaryinAdvance', {
                templateUrl: 'app/views/accounts/salary-in-advance.html',
                controller: 'AccountsCtrl'
            }). 
            otherwise({
                redirectTo: '/MyAccounts'
            });
        }
    ]);

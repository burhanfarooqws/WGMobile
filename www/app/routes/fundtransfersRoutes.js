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
 Fund Transfer Routes 
 */

var vbAppTransfers = angular.module('vbAppTransfers', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/FundTransfer', {
                templateUrl: 'app/views/transfers/fund-transfer.html',
                controller: 'TransfersCtrl'
            }).
			when('/OwnAccounts', {
                templateUrl: 'app/views/transfers/own-account.html',
                controller: 'TransfersCtrl'
            }).
			when('/WithinBank', {
                templateUrl: 'app/views/transfers/within-bank.html',
                controller: 'TransfersCtrl'
            }).
			when('/DomesticTransfer', {
                templateUrl: 'app/views/transfers/domestic-transfer.html',
                controller: 'TransfersCtrl'
            }).
			when('/InternationalTransfer', {
                templateUrl: 'app/views/transfers/international-transfer.html',
                controller: 'TransfersCtrl'
            }).
			when('/WesternUnionPayment', {
                templateUrl: 'app/views/transfers/wu-payment.html',
                controller: 'TransfersCtrl'
            }).
			when('/WesternUnionReceive', {
                templateUrl: 'app/views/transfers/wu-receive.html',
                controller: 'TransfersCtrl'
            }).
            when('/IncreaseDecreaseLimit', {
                templateUrl: 'app/views/transfers/increase-decrease-limit.html',
                controller: 'TransfersCtrl'
            }).
            otherwise({
                redirectTo: '/FundTransfer'
            });
        }
    ]);

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
 Payments Routes 
 */ 

var vbAppPayments = angular.module('vbAppPayments', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/BillPayments', {
                templateUrl: 'app/views/payments/bill-payments.html',
                controller: 'PaymentsCtrl'
            }).
            when('/PaySavedBills', {
                templateUrl: 'app/views/payments/pay-new-bill.html',
                controller: 'PaymentsCtrl'
            }).
            otherwise({
                redirectTo: '/BillPayments'
            });
        }
    ]);

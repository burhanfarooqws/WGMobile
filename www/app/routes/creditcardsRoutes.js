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
 Credit Cards Routes 
 */

var vbAppCreditCards = angular.module('vbAppCreditCards', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/MyCards', {
                templateUrl: 'app/views/creditcards/my-cards.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/CardActivation', {
                templateUrl: 'app/views/creditcards/card-activation.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/CardPayment', {
                templateUrl: 'app/views/creditcards/card-payments.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/CardToAccountTransfer', {
                templateUrl: 'app/views/creditcards/card-to-account-transfer.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/CardUsageFilter', {
                templateUrl: 'app/views/creditcards/card-usage-filter.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/BlockCard', {
                templateUrl: 'app/views/creditcards/block-card.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/ChangeCardPin', {
                templateUrl: 'app/views/creditcards/chage-card-pin.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/CreditCardApplication', {
                templateUrl: 'app/views/creditcards/credit-card-application.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/SuppCardApplication', {
                templateUrl: 'app/views/creditcards/suppcard-application.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/DebitCardApplication', {
                templateUrl: 'app/views/creditcards/debit-card-application.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/SuppCardLimitUpdate', {
                templateUrl: 'app/views/creditcards/suppcard-limit-update.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/PrepaidCardApplication', {
                templateUrl: 'app/views/creditcards/prepaid-card-application.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/PrepaidCardTopup', {
                templateUrl: 'app/views/creditcards/prepaid-card-topup.html',
                controller: 'CreditCardsCtrl'
            }).
            when('/EarlyCardRenewal', {
                 templateUrl: 'app/views/creditcards/early-card-renewal.html',
                 controller: 'CreditCardsCtrl'
            }).
            otherwise({
                redirectTo: '/MyCards'
            });
        }
    ]);

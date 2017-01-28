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
 Services Routes 
 */

var vbAppServices = angular.module('vbAppServices', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/OnlineVault', {
                templateUrl: 'app/views/services/online-vault.html',
                controller: 'ServicesCtrl'
            }).
            when('/EmailUs', {
                templateUrl: 'app/views/services/emailus.html',
                controller: 'ServicesCtrl'
            }).
            when('/UpdatePersonalInfo', {
                templateUrl: 'app/views/services/update-personal-information.html',
                controller: 'ServicesCtrl'
            }).
            when('/CommunicationPreference', {
                templateUrl: 'app/views/services/communication-preference.html',
                controller: 'ServicesCtrl'
            }).
            when('/PersonalCalendar', {
                templateUrl: 'app/views/services/personal-calendar.html',
                controller: 'ServicesCtrl'
            }).
            when('/InternetTransactionHistory', {
                templateUrl: 'app/views/services/internet-transaction-history.html',
                controller: 'ServicesCtrl'
            }).
            when('/ExchangeRates', {
                templateUrl: 'app/views/services/exchange-rates.html',
                controller: 'ServicesCtrl'
            }).
            when('/SMSSubscription', {
                templateUrl: 'app/views/services/sms-subscription.html',
                controller: 'ServicesCtrl'
            }).
			when('/Appointment', {
                templateUrl: 'app/views/services/appointment.html',
                controller: 'ServicesCtrl'
            }).
			when('/AppointmentCarLoan', {
                templateUrl: 'app/views/services/appointment-car.html',
                controller: 'ServicesCtrl'
            }).
			when('/Message', {
                templateUrl: 'app/views/services/rm-message.html',
                controller: 'ServicesCtrl'
            }).
            when('/Offers', {
                templateUrl: 'app/views/services/offers.html',
                controller: 'ServicesCtrl'
            }).
			when('/eStatementSubscribe', {
                templateUrl: 'app/views/services/eStatementsubscribe.html',
                controller: 'ServicesCtrl'
            }).
            otherwise({
                redirectTo: '/Services'
            });
        }
    ]);

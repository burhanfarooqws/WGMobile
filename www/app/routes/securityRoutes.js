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
 Security Routes 
 */ 

var vbAppSecurity = angular.module('vbAppSecurity', [])
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/ChangeSecuritySettings', {
                templateUrl: 'app/views/security/change-security-settings.html',
                controller: 'SecurityCtrl'
            }).
            when('/AccountAccessManagement', {
                templateUrl: 'app/views/security/account-access-management.html',
                controller: 'SecurityCtrl'
            }).
            when('/ApplyCountryRestrictions', {
                templateUrl: 'app/views/security/apply-country-restrictions.html',
                controller: 'SecurityCtrl'
            }).
            otherwise({
                redirectTo: '/Security'
            });
        }
    ]);

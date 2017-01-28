/*!
 *
 * This file contains the application configuration and routing.
 *
 * @project   VeriBranch
 * @date      08-10-2015
 * @author    VeriPark
 * @licensor  VeriPark Gulf
 * @site      www.veripark.com
 *
 */

'use strict';

var vbApp = angular.module('vbApp', [
    'vbAppAccounts',
    'vbAppCreditCards',
    'vbAppPayments',
    'vbAppTransfers',
    'vbAppPFM',
    'vbAppServices',
    'vbAppSecurity', 
]); 
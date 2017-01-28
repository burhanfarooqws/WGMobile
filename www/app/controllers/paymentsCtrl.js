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
 for payment controller functions
 */

(function() {
    vbAppPayments.controller('PaymentsCtrl', function($scope, AccountsListService, CreditCardsListService, PaymentListService, VBFormStepService) {

        /* to get the accounts list data as a service */
        AccountsListService.list(function(data) {
            $scope.Accounts = data.CustomerAccounts; // response data 
        });

        /* to get the credit cards list data as a service */
        CreditCardsListService.list(function(data) {
            $scope.creditcards = data.CreditCards; // response data 
        });

        /* to get the payments list data as a service */
        PaymentListService.list(function(data) {
            $scope.payments = data.CustomerPayments[0].Beneficiaries;
        });

        /* to select the first account and card */
        $scope.selectedAccount = {AccountId: '0'};
        $scope.selectedAccount1 = {AccountId: '0'};

        /* to pick the selected account number */
        $scope.selectAccountNumber = {selected: '0313015192584501'}; 
        $scope.onTaskSelect = function(task) { 
            $scope.selectAccountNumber =  {selected: task.AccountNumber}; 
        };

        $scope.selectedCard = {CardId: '0'};
        $scope.selectedCard1 = {CardId: '0'};

        $scope.SaveBeneficiary = true;

        /* show / hide the payment source accounts list / credit cards list */
        $scope.PaymentSource = 'Accounts';
        $scope.isShown = function(PaymentSource) {
            return PaymentSource === $scope.PaymentSource;
        };

        /* show / hide the scheduled and recurring payment fields */
        $scope.PaymentType = 'immediatePayment';
        $scope.isShown = function(PaymentType) {
            return PaymentType === $scope.PaymentType;
        };

        /* to show the transaction history  */
        $scope.showHistoryDetails = false;
        $scope.showHistory = function() {
            $scope.showHistoryDetails = true;
        }

        /* to show due amount  */
        $scope.showDueAmount = false;
        $scope.checkDueAmount = function() {
            $scope.showDueAmount = true;
        }

        /* to show hide the form steps from factory */
        VBFormStepService.VBStepControl($scope);

        /* to show tag your transaction section  */
        $scope.TagTransactionSection = false;
        $scope.TagTransaction = function() {
            $scope.TagTransactionSection = true;
        }
        $scope.CancelTagTransaction = function() {
            $scope.TagTransactionSection = false;
        }

        /* mobile number regular expression */ 
        $scope.mobileNumberPattern = /^[0-9]/;

        /* to prnt the confirmation from factory 
        VBFormStepService.VBStepControl($scope);*/  
        $scope.vbPrintConfirmation = function(printable) {  
            var printContents = document.getElementById('vbPrintable').innerHTML;
            var originalContents = document.body.innerHTML;      

            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                var popupWin = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
                popupWin.window.focus();
                popupWin.document.write('<!DOCTYPE html><html><head><title>VeriChannel</title>' +
                    '<link rel="stylesheet" type="text/css" href="themes/css/print.css" />' +
                    '</head><body onload="window.print()"><br><p><img src="themes/imgs/logo.png" width="160" /></p><br><div>' + printContents + '</div></html>');
                popupWin.onbeforeunload = function (event) {
                    popupWin.close();
                    return '.\n';
                };
                popupWin.onabort = function (event) {
                    popupWin.document.close();
                    popupWin.close();
                }
            } else {
                var popupWin = window.open('', '_blank', 'width=800,height=600');
                popupWin.document.open();
                popupWin.document.write('<html><head><title>VeriChannel</title><link rel="stylesheet" type="text/css" href="themes/css/print.css" /></head><body onload="window.print()"><br><p><img src="themes/imgs/logo.png" width="160" /></p><br>' + printContents + '</html>');
                popupWin.document.close();
            }
            popupWin.document.close(); 
            return true; 
        } 
        
        /* currency */ 
        $scope.vbCurrency = "GBP";
        $scope.vbCurrencyName = "Great British Pound";


        /* to load the bootstrap datetime picker */
        $(function() {
            vbDateTimePicker();
        });

    });

})();

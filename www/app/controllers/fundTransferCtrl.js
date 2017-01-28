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
 for fund transfer controller functions
 */

(function() { 
    vbAppTransfers.controller('TransfersCtrl', function($scope, $http, AccountsListService, PaymentListService, VBFormStepService) {

        /* to get the accounts list data as a service */
        AccountsListService.list(function(data) {
            $scope.Accounts = data.CustomerAccounts; // response data 

            /* to populate the first account data */
            $scope.selectAccount = data.CustomerAccounts[0];
        });

        /* to get the current date */
        $scope.todaysDate = new Date(); 

        /* to select the first account and card */
        $scope.selectedAccount = {AccountId: '0'}; 

        $scope.selectedBeneficiary = {BeneficiaryId: '0'}; 

        /* to get the payments list data as a service */
        PaymentListService.list(function(data) {
            $scope.beneficiaries = data.FundTransfer[0].Beneficiaries;
        }); 
		
		/* to get the Within Bank Transfer list data as a service */
        PaymentListService.list(function(data) {
            $scope.WithinBankbeneficiaries = data.FTWithinBank[0].Beneficiaries;
        });
		
		/* to get the Domestic Transfer list data as a service */
        PaymentListService.list(function(data) {
            $scope.Domesticbeneficiaries = data.FTDomestic[0].Beneficiaries;
        });
		
		/* to get the Internatinoal Transfer list data as a service */
        PaymentListService.list(function(data) {
            $scope.Internationalbeneficiaries = data.FTInternational[0].Beneficiaries;
        });

        /* to show hide the form steps from factory */
        VBFormStepService.VBStepControl($scope);

        /* show / hide the payment source accounts list / credit cards list */
        $scope.CreditSource = 'OwnAccounts';
        $scope.isShown = function(CreditSource) {
            return CreditSource === $scope.CreditSource;
        };

        $scope.AddNewBeneficiaryForm = false;
        $scope.AddNewBeneficiary = function() {
            $scope.AddNewBeneficiaryForm = true;
        };
        $scope.CancelBeneficiary = function() {
            $scope.AddNewBeneficiaryForm = false;
        }; 

        /* to pick the selected account number */
        $scope.selectAccountNumber = {selected: '0313015192584501'}; 
        $scope.onTaskSelect = function(task) { 
            $scope.selectAccountNumber =  {selected: task.AccountNumber}; 
        };

        /* to pick the charges payable */
        $scope.ChargesPayable = {selected: 'Self'};

        /* show / hide the other amount */
        $scope.TransferAmount = 'OtherAmount';
        $scope.isShown = function(TransferAmount) {
            return TransferAmount === $scope.TransferAmount;
        };

        /* to show the budget information */
        $scope.BudgetInformation = false;
        $scope.showBudgetInformation = function() {
            $scope.BudgetInformation = true;
        };
        $scope.CancelBudgetInformation = function() {
            $scope.BudgetInformation = false;
        };

        $scope.TransferType = 'Immediate';
        $scope.isShown = function(TransferType) {
            return TransferType === $scope.TransferType;
        };

        /* show / hide the payment frequency */
        $scope.FrequencyType = 'WeeklyPayment';
        $scope.isShown = function(FrequencyType) {
            return FrequencyType === $scope.FrequencyType;
        };

        /* to show tag your transaction section  */
        $scope.TagTransactionSection = false;
        $scope.TagTransaction = function() {
            $scope.TagTransactionSection = true;
        }
        $scope.CancelTagInfo = function() {
            $scope.TagTransactionSection = false;
        }

        /* form validataion rules */

        /* mobile number regular expression */ 
        $scope.mobileNumberPattern = /^[0-9]/;


        /* to enable / disable the other veribank accounts */
        $scope.EnableDisable = true;

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

		/* If Transfer Amount is = > 5000 then show modal window for Offer */
		$scope.showModal = function() { 
			$scope.GoVBFormConfirmation(); 
			//alert($scope.FundTransferForm.OtherAmount);
			if($scope.FundTransferForm.OtherAmount > 4999)
			{
            	$('#VBPromotionFixedDeposit').modal('show');
			}
        }

        /* currency */ 
        $scope.vbCurrency = "GBP";
        $scope.vbCurrencyName = "Great British Pound";

        /* to load the bootstrap datetime picker */
        $(function() {
            vbDataTable();
            vbDateTimePicker();
        }); 
    });

})();

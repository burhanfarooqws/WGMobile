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
 for accounts list controller functions 
 */

(function() {
    vbAppAccounts.controller('AccountsCtrl', function($scope, AccountsListService, VBFormStepService) {

        /* to get the accounts list data as a service */
        AccountsListService.list(function(data) {
            $scope.Accounts = data.CustomerAccounts; // response data
            $scope.Transactions = [];
            angular.forEach(data.CustomerAccounts, function(Account, index) {
                angular.forEach(Account.Transactions, function(Transaction, index) {
                    $scope.Transactions.push(Transaction);
                });
            });

            /* to populate the first account data */
            $scope.selectAccount = data.CustomerAccounts[0];
        }); 

        /* to select the first account */
        $scope.selectedAccount = {AccountId: '0'};
        $scope.selectedAccount1 = {AccountId: '0'};

        /* to show the today;s date */
        $scope.todaysDate = new Date();
		$scope.todaysDate2 = new Date();

        /* account opening form toggles */
        $scope.AOFormSteps = true;
        $scope.AOConfirmation = false;
        $scope.AOTermsConditions = false;
        $scope.AOReceipt = false;

        /* to select the default radio options */        
        //for term deposit account opening form
        $scope.MaturityInstruction = {selected: 'Do not renew, Transfer the principal and profit to account specified below'};   

        // for account opening form
        $scope.DebitCardOptions = {selected: 'New Card'};
        $scope.DebitCardFacility = {selected: 'Yes'};

        /* show / hide the another branch fields */
        $scope.DeliveryOptions = {selected: 'To Home Branch'};

        /* to pick the selected account number */
        $scope.selectAccountNumber = {selected: '0313015192584501'};
        $scope.selectAccountNumber1 = {selected: '0313015192584501'};
        $scope.selectAccountType = {selected: 'Current Account'};
        $scope.selectAccountType1 = {selected: 'Current Account'}; 
        $scope.selectAccountCurrentBalance = {selected: '2,869.00'};
        $scope.selectAccountCurrentBalance1 = {selected: '2,869.00'};
        $scope.onTaskSelect = function(task) { 
            $scope.selectAccountNumber =  {selected: task.AccountNumber};
            $scope.selectAccountType =  {selected: task.AccountType}; 
            $scope.selectAccountCurrentBalance =  {selected: task.AccountCurrentBalance};
        };
        $scope.onTaskSelect1 = function(task) {  
            $scope.selectAccountNumber1 =  {selected: task.AccountNumber};
            $scope.selectAccountType1 =  {selected: task.AccountType}; 
            $scope.selectAccountCurrentBalance1 =  {selected: task.AccountCurrentBalance};
        };

        $scope.GoAOConfirmation = function() {
            $scope.submitForm = function(isValid) {  

                // Set the 'submitted' flag to true
                $scope.submitted = true;                  
                $scope.validationError = false;

                // check to make sure the form is completely valid 
                if(!isValid){  
                    $scope.validationError = true;   

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }

                // function to submit the account form after all validation has occurred    
                if(isValid){    
                    $scope.AOFormSteps = false;
                    $scope.AOConfirmation = true;
                    $scope.AOTermsConditions = false;
                    $scope.AOReceipt = false;  
                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }   
                
                /* to show the correct maturity date */
                var maturityDate = '';  
                var currentDate = $scope.todaysDate;
                var investmentTerm = $scope.TDOpeningForm.tdopenInvestmentTerm;  
                if(investmentTerm =='1 Month'){   
                    $scope.maturityDate = currentDate.setDate(currentDate.getDate() + 30);
                } else if(investmentTerm =='2 Months'){
                    $scope.maturityDate = currentDate.setDate(currentDate.getDate() + 60);
                } else if(investmentTerm =='3 Months'){
                    $scope.maturityDate = currentDate.setDate(currentDate.getDate() + 90);
                } else if(investmentTerm =='6 Months'){
                    $scope.maturityDate = currentDate.setDate(currentDate.getDate() + 120);
                } else if(investmentTerm =='12 Months'){
                    $scope.maturityDate = currentDate.setDate(currentDate.getDate() + 360);
                } else if(investmentTerm =='18 Months'){
                    $scope.maturityDate = currentDate.setDate(currentDate.getDate() + 540);
                }
            }  
        } 

        $scope.GoAOReceipt = function() {
            $scope.AOFormSteps = false;
            $scope.AOConfirmation = false;
            $scope.AOTermsConditions = false;
            $scope.AOReceipt = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.GoAOTC = function() {
            $scope.AOFormSteps = false;
            $scope.AOConfirmation = false;
            $scope.AOTermsConditions = true;
            $scope.AOReceipt = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.BackAOFormSteps = function() {
            $scope.AOFormSteps = true;
            $scope.AOConfirmation = false;
            $scope.AOTermsConditions = false;
            $scope.AOReceipt = false;
			
			/* reset todaysDate date to current date */
			$scope.todaysDate = new Date();

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        } 

        //$scope.firstRadio = false;
        $scope.selected = '1';

        /* to enable the terms & condition continue button */
        $scope.tcAccept = 'Accepted';
        $scope.isAccepted = function(index) {
            return index === $scope.tcAccept;
        };

        /* to show hide the form steps from factory */
        VBFormStepService.VBStepControl($scope);

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
			//alert();
			$scope.GoAOConfirmation(); 
			if($scope.TDOpeningForm.investmentAmount > 4999)
			{
            	$('#VBPromotionFixedDeposit').modal('show');
				//alert();
			}
        }

        /* currency */ 
        $scope.vbCurrency = "GBP";
        $scope.vbCurrencyName = "Great British Pound";
        $scope.vbCurrencySymbol = "£";     

        /* to load the necessary plugins */
        $(function() {
            setTimeout(function() {
                vbDataTable();
                vbDateTimePicker();
            }, 100);
        });

    });

	
	/* for my accounts charts page */
    vbAppAccounts.controller('AccountsChartCtrl', function($scope, AccountsListService) {

        /* to get the accounts list data as a service */
        AccountsListService.list(function(data) {
            $scope.Accounts = data.CustomerAccounts; // response data
            $scope.Transactions = [];
            angular.forEach(data.CustomerAccounts, function(Account, index) {
                angular.forEach(Account.Transactions, function(Transaction, index) {
                    $scope.Transactions.push(Transaction);
                });
            });

            /* to populate the first account data */
            $scope.selectAccount = data.CustomerAccounts[0];
        });

        /* to select the first account */
        $scope.selectedAccount = {AccountId: '0'};
        $scope.selectedAccount1 = {AccountId: '0'};

        /* to pick the selected account number */
        $scope.selectAccountNumber = {selected: '0313015192584501'};
        $scope.selectAccountNumber1 = {selected: '0313015192584501'};
        $scope.selectAccountType = {selected: 'Current Account'};
        $scope.selectAccountType1 = {selected: 'Current Account'}; 
        $scope.selectAccountCurrentBalance = {selected: '2,869.00'};
        $scope.selectAccountCurrentBalance1 = {selected: '2,869.00'};
        $scope.selectAccountBranch = {selected: 'Munich Mall Branch'};
        $scope.onTaskSelect = function(task) { 
            $scope.selectAccountNumber =  {selected: task.AccountNumber};
            $scope.selectAccountType =  {selected: task.AccountType}; 
            $scope.selectAccountCurrentBalance =  {selected: task.AccountCurrentBalance};
            $scope.selectAccountBranch =  {selected: task.AccountBranch};
        };
        $scope.onTaskSelect1 = function(task) {  
            $scope.selectAccountNumber1 =  {selected: task.AccountNumber};
            $scope.selectAccountType1 =  {selected: task.AccountType}; 
            $scope.selectAccountCurrentBalance1 =  {selected: task.AccountCurrentBalance};
            $scope.selectAccountBranch =  {selected: task.AccountBranch}; 
        }; 

        /* form toggles for steps, confirmations and receipts */
        $scope.AccountSection = true;
        $scope.AccountStamentSection = false;
        $scope.AccountMiniStamentSection = false;
        $scope.AccountDetailsSection = false;
        $scope.TDAccountDetailsSection = false;
        $scope.GoToAccountStatement = function() {
            $scope.AccountSection = false;
            $scope.AccountStamentSection = true;
            $scope.AccountMiniStamentSection = false;
            $scope.AccountDetailsSection = false;
            $scope.TDAccountDetailsSection = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });

            $(function() {
                setTimeout(function() {
                    vbDataTable();
                }, 1);
            });
        }
        $scope.GoToAccountMiniStatement = function() {
            $scope.AccountSection = false;
            $scope.AccountStamentSection = false;
            $scope.AccountMiniStamentSection = true;
            $scope.AccountDetailsSection = false;
            $scope.TDAccountDetailsSection = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.GoToAccountDetails = function() {
            $scope.AccountSection = false;
            $scope.AccountStamentSection = false;
            $scope.AccountMiniStamentSection = false;
            $scope.AccountDetailsSection = true;
            $scope.TDAccountDetailsSection = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.GoToTDAccountDetails = function() {
            $scope.AccountSection = false;
            $scope.AccountStamentSection = false;
            $scope.AccountMiniStamentSection = false;
            $scope.AccountDetailsSection = false;
            $scope.TDAccountDetailsSection = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.BackToAccounts = function() {
            $scope.AccountSection = true;
            $scope.AccountStamentSection = false;
            $scope.AccountMiniStamentSection = false;
            $scope.AccountDetailsSection = false;
            $scope.TDAccountDetailsSection = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }

         $scope.accountList = "AccountId";

        /* to show / hide the advanced search fields */
        $scope.IsVisible = false;
        $scope.AdvancedSearch = function() {
            $scope.IsVisible = $scope.IsVisible ? false : true;
        }

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
                    '</head><body onload="window.print()"><div>' + printContents + '</div></html>');
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
                popupWin.document.write('<html><head><title>VeriChannel</title><link rel="stylesheet" type="text/css" href="themes/css/print.css" /></head><body onload="window.print()">' + printContents + '</html>');
                popupWin.document.close();
            }
            popupWin.document.close(); 
            return true; 
        } 

        /* currency */ 
        $scope.vbCurrency = "GBP";
        $scope.vbCurrencyName = "Great British Pound";  

        /* to load the necessary plugins */
        $(function() {
            setTimeout(function() {
                vbCanvasChart();
                vbDateTimePicker();
                vbRangeSlider();
            }, 100);
        });
    });

})();
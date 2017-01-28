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
for services controller functions
 */

(function() {
    vbAppServices.controller('ServicesCtrl', function($scope) { 
        /* form toggles for steps, confirmations and receipts */
        $scope.VBFormSteps = true;
        $scope.VBMailReplyForm = false;
        $scope.VBFormConfirmation = false;
        $scope.VBFormReceipt = false;
        $scope.GoVBFormConfirmation = function() { 

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
                    $scope.VBFormSteps = false;
                    $scope.VBMailReplyForm = false;
                    $scope.VBFormConfirmation = true;
                    $scope.VBFormReceipt = false;

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }  
            }  
        }
        $scope.GoVBFormReceipt = function() {
            $scope.VBFormSteps = false;
            $scope.VBMailReplyForm = false;
            $scope.VBFormConfirmation = false;
            $scope.VBFormReceipt = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.BackVBFormFormSteps = function() {
            $scope.VBFormSteps = true;
            $scope.VBMailReplyForm = false;
            $scope.VBFormConfirmation = false;
            $scope.VBFormReceipt = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }

        $scope.GoVBMailReplyForm = function() {
            $scope.VBFormSteps = false;
            $scope.VBMailReplyForm = true;
            $scope.VBFormConfirmation = false;
            $scope.VBFormReceipt = false;
        }

        /* to show the transaction history  */
        $scope.showHistoryDetails = false;
        $scope.showHistory = function() {
            $scope.showHistoryDetails = true;
        }

        /* show / hide the other mobile number */
        $scope.CallBackPhone = 'RegisteredMobile';
        $scope.isShown = function(CallBackPhone) {
            return CallBackPhone === $scope.CallBackPhone;
        };

        /* to show / hide the selected accounts and cards */
        $scope.Subscription = 'All';
        $scope.PULLService = 'Subscribe'

        $scope.SucessMessage = false;
        $scope.SuccessMessageAction = function() {
            $scope.SucessMessage = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }  

        $scope.setReminder = false;
        $scope.setReminderModal = function(){
            $scope.setReminder = !$scope.setReminder;
        };

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

        $(function() {
            vbDateTimePicker();
            vbKnob();
        });
		
		/* show date control on RM click */
		$scope.showDate = false;
		$scope.ShowDateClick = function()
		{
			$scope.showDate = true;
		};
		
		/* show inviual timeslot on RM click */
		$scope.showDescription = false;
		$scope.showTime1 = false;
		$scope.ShowTime1Click = function()
		{
			$scope.showTime1 = true;
			$scope.showTime2 = false;
			$scope.showTime3 = false;
			$scope.showTime4 = false;
			$scope.showTime5 = false;
			
			$scope.showDate = true;
			$scope.showDescription = true;
		};
		$scope.showTime2 = false;
		$scope.ShowTime2Click = function()
		{
			$scope.showTime1 = false;
			$scope.showTime2 = true;
			$scope.showTime3 = false;
			$scope.showTime4 = false;
			$scope.showTime5 = false;
			
			$scope.showDate = true;
			$scope.showDescription = true;
		};
		$scope.showTime3 = false;
		$scope.ShowTime3Click = function()
		{
			$scope.showTime1 = false;
			$scope.showTime2 = false;
			$scope.showTime3 = true;
			$scope.showTime4 = false;
			$scope.showTime5 = false;
			
			$scope.showDate = true;
			$scope.showDescription = true;
		};
		$scope.showTime4 = false;
		$scope.ShowTime4Click = function()
		{
			$scope.showTime1 = false;
			$scope.showTime2 = false;
			$scope.showTime3 = false;
			$scope.showTime4 = true;
			$scope.showTime5 = false;
			
			$scope.showDate = true;
			$scope.showDescription = true;
		};
		$scope.showTime5 = false;
		$scope.ShowTime5Click = function()
		{
			$scope.showTime1 = false;
			$scope.showTime2 = false;
			$scope.showTime3 = false;
			$scope.showTime4 = false;
			$scope.showTime5 = true;
			
			$scope.showDate = true;
			$scope.showDescription = true;
		};
		
		/* show times and description on RM calender click */
		$scope.showTime = false;
		$scope.ShowTimeClick = function()
		{
			if($("#startDate").val() != '')
			{
				$scope.showTime = true;
			}
			//alert($("#startDate").val());
		
		};
		
		$scope.DateSelected = {SelectedDate: ''}
		
		
    });
})(); 
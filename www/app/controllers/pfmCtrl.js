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
for personal finance management controller functions
 */

(function() {
    vbAppPFM.controller('PFMCtrl', function($scope, VBFormStepService) {

        /* to show hide the form steps from factory */
        VBFormStepService.VBStepControl($scope);

        $scope.SucessMessage = false;
        $scope.SuccessMessageAction = function() {
            $scope.SucessMessage = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }

        /* for add new goal */
        $scope.GoalFrequency = 'Weekly';   
        $scope.isShown = function(GoalFrequency) {
            return GoalFrequency === $scope.GoalFrequency;
        };

        /* to show the today;s date */
        $scope.todaysDate = new Date();

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
    });

    /* for budget controller functions */
    vbAppPFM.controller('BudgetCtrl', function($scope) {

        /* budget management */
        $scope.BudgetDetails = true;
        $scope.AddNewBudgetForm = false;
        $scope.BudgetComparisonForm = false;
        $scope.GoAddNewBudgetForm = function() {
            $scope.BudgetDetails = false;
            $scope.AddNewBudgetForm = true;
            $scope.BudgetComparisonForm = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.GoBudgetComparisonForm = function() {
            $scope.BudgetDetails = false;
            $scope.AddNewBudgetForm = false;
            $scope.BudgetComparisonForm = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        $scope.BackBudgetDetails = function() {
            $scope.BudgetDetails = true;
            $scope.AddNewBudgetForm = false;
            $scope.BudgetComparisonForm = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }

        /* budget comparison */
        $scope.YearlyForm = true;
        $scope.MonthlyForm = true;
        $scope.WeeklyForm = false;
        $scope.DailyForm = false;
        $scope.ShowYearly = function() {
            $scope.YearlyForm = true;
            $scope.MonthlyForm = false;
            $scope.WeeklyForm = false;
            $scope.DailyForm = false;
        }
        $scope.ShowMonthly = function() {
            $scope.YearlyForm = true;
            $scope.MonthlyForm = true;
            $scope.WeeklyForm = false;
            $scope.DailyForm = false;
        }
        $scope.ShowWeekly = function() {
            $scope.YearlyForm = true;
            $scope.MonthlyForm = true;
            $scope.WeeklyForm = true;
            $scope.DailyForm = false;
        }
        $scope.ShowDaily = function() {
            $scope.YearlyForm = true;
            $scope.MonthlyForm = true;
            $scope.WeeklyForm = true;
            $scope.DailyForm = true;
        }

        //$scope.SucessMessage = false;
        $scope.AddNewBudget = function() {

            $scope.submitForm = function(isValid) {  

                // Set the 'submitted' flag to true
                $scope.submitted = true;                  
                $scope.validationError = false;
                $scope.SucessMessage = false;

                // check to make sure the form is completely valid 
                if(!isValid){  
                    $scope.validationError = true;   
                    $scope.SucessMessage = false;

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }

                // function to submit the account form after all validation has occurred    
                if(isValid){    
                    $scope.validationError = false;   
                    $scope.SucessMessage = true;

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }  
            }  
        }

        /* currency */ 
        $scope.vbCurrency = "GBP";
        $scope.vbCurrencyName = "Great British Pound";

        $(function() {
            vbDateTimePicker();
            vbKnob();
            vbBarChart();
        });
    });

})();
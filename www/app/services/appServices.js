'use strict';

/* To get the account transactions data as a service */
vbApp.factory('AccountTransactionService', function($http) {
    return {
        list: function(callback) {
            $http.get('app/data/accTransactions.json').success(callback);
        }
    };
});

/* To get the account list data as a service */
vbApp.factory('AccountsListService', function($http) {
    return {
        list: function(callback) {
            $http.get('app/data/accounts.json').success(callback);
        }
    }
});

/* To get the credit cards list data as a service */
vbApp.factory('CreditCardsListService', function($http) {
    return {
        list: function(callback) {
            $http.get('app/data/creditcards.json').success(callback);
        }
    }
});

/* To get the payment list data as a service */
vbApp.factory('PaymentListService', function($http) {
    return {
        list: function(callback) {
            $http.get('app/data/payments.json').success(callback);
        }
    }
});  

/* a common service to manipulate the form steps */
vbApp.factory('VBFormStepService', function() {
    var FnObject = {};
    FnObject.VBStepControl = function(scope, callback) {
        /* form toggles for steps, confirmations and receipts */
        scope.VBFormSteps = true;
        scope.VBFormConfirmation = false;
        scope.VBFormReceipt = false;
        scope.GoVBFormSteps = function() {
            scope.VBFormSteps = true;
            scope.VBFormConfirmation = false;
            scope.VBFormReceipt = false;
        }
        scope.GoVBFormConfirmation = function() {

            scope.submitForm = function(isValid) {  

                // Set the 'submitted' flag to true
                scope.submitted = true;                  
                scope.validationError = false;

                // check to make sure the form is completely valid 
                if(!isValid){  
                    scope.validationError = true;   

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }

                // function to submit the account form after all validation has occurred    
                if(isValid){    
                    scope.VBFormSteps = false;
                    scope.VBFormConfirmation = true;
                    scope.VBFormReceipt = false;

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }  
            } 
        }
        scope.GoVBFormReceipt = function() {
            scope.VBFormSteps = false;
            scope.VBFormConfirmation = false;
            scope.VBFormReceipt = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
        scope.BackVBFormFormSteps = function() {
            scope.VBFormSteps = true;
            scope.VBFormConfirmation = false;
            scope.VBFormReceipt = false;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
    }
    return FnObject;
});

/* a common service to print the confirmation page 
vbApp.factory('VBPrintService', function() {
    var PrintObject = {}; 
    PrintObject.vbPrintConfirmation = function(scope, callback, printable) {  
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
    return PrintObject;
});*/

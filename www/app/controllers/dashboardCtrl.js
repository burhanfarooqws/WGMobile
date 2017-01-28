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
 for dashboard controller functions  
 */

(function() {
    vbApp.controller('DashboardCtrl', function($scope, $http, AccountTransactionService, AccountsListService, CreditCardsListService) {
        
        /* to get the account transaction data as a service */
        AccountTransactionService.list(function(data) {
            $scope.transactions = data.Transactions;
        });

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

        /* to get the credit cards list data as a service */
        CreditCardsListService.list(function(data) {
            $scope.CreditCards = data.CreditCards; // response data
            $scope.Transactions = [];
            angular.forEach(data.CreditCards, function(CreditCard, index) {
                angular.forEach(CreditCard.Transactions, function(Transaction, index) {
                    $scope.Transactions.push(Transaction);
                });
            });

            /* to populate the first credit card data */
            $scope.selectCC = data.CreditCards[0];
        });

        /* currency */ 
        $scope.vbCurrency = "GBP";
        $scope.vbCurrencyName = "Great British Pound";  

        /* to load the necessary plugins */
        $(function() {
            setTimeout(function() {
                vbCanvasChart();
                vbDataTable();
                vbDateTimePicker();
            }, 100);
        });
    });

})();

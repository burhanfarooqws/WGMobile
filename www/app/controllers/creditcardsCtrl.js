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
 for credit cards controller functions
 */

(function() {
    vbAppCreditCards.controller('CreditCardsCtrl', function($scope, $timeout, AccountsListService, CreditCardsListService, VBFormStepService) {

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
            $scope.selectTransactions = data.CreditCards[0];
            $scope.selectStatement = data.CreditCards[0];
        });

        /* to show the today;s date */
        $scope.todaysDate = new Date();

        /* to select the first account and card */
        $scope.selectedAccount = {AccountId: '0'};
        $scope.selectedAccount1 = {AccountId: '0'};

        $scope.selectedCard = {CardId: '0'};
        $scope.selectedCard1 = {CardId: '0'};

        /* to pick the selected account number */
        $scope.selectAccountNumber = {selected: '0313015192584501'}; 
        $scope.onTaskSelect = function(task) { 
            $scope.selectAccountNumber =  {selected: task.AccountNumber}; 
        };
        $scope.selectCardNumber =  {selected: '4578 **** **** 1001'};
        $scope.selectCreditLimit =  {selected: '10,000.00'};
        $scope.selectDueDate =  {selected: '30 APR 2015'};
        $scope.selectMinimumAmountDue =  {selected: '325.00'}; 
        $scope.selectAvailableLimit =  {selected: '7,900.00'};
        $scope.selectCardType =  {selected: 'Visa'};
        $scope.selectExpiryMonth =  {selected: '07'};
        $scope.selectExpiryYear =  {selected: '2018'};  
        $scope.onTaskSelect1 = function(task) {  
            $scope.selectCardNumber =  {selected: task.CardNumber};
            $scope.selectCreditLimit =  {selected: task.CreditLimit};
            $scope.selectDueDate =  {selected: task.DueDate};
            $scope.selectMinimumAmountDue =  {selected: task.MinimumAmountDue};  
            $scope.selectAvailableLimit = {selected: task.AvailableLimit};
            $scope.selectCardType = {selected: task.CardType};
            $scope.selectExpiryMonth = {selected: task.ExpiryMonth};
            $scope.selectExpiryYear = {selected: task.ExpiryYear};  
        };
        $scope.selectCardNumber2 =  {selected: '4578 **** **** 1001'}; 
        $scope.onTaskSelect2 = function(task) {  
            $scope.selectCardNumber2 =  {selected: task.CardNumber}; 
        }; 

        $scope.ReplaceCard = {selected: 'Yes'};
        $scope.BlockReason = {selected: 'Lost'}

        /* for card usage filter */
        $scope.SMSInternetUsage = {'selected':'Yes'};  
        $scope.SMSNational = {'selected':'Yes'};
        $scope.SMSInternational = {'selected':'Yes'};

        /* to get the accounts list data as a service */
        AccountsListService.list(function(data) {
            $scope.Accounts = data.CustomerAccounts; // response data
            $scope.Transactions = [];
            angular.forEach(data.CustomerAccounts, function(Account, index) {
                angular.forEach(Account.Transactions, function(Transaction, index) {
                    $scope.Transactions.push(Transaction);
                });
            });
        });

        /* to refresh the datatable */
        $scope.refreshLastTransactions = function() {
            $timeout(function() {
                angular.element('.transaction .sorting').trigger('click');
            }, 0);
        }

        $scope.refreshCardStatement = function() {
            $timeout(function() {
                angular.element('.cardStatement .sorting').trigger('click');
            }, 0);
        }

        /* to show the last 5 transactions */
        $scope.last5transactions = 5;

        /* to show all the transaction data */
        $scope.viewAllTransactions = function(data) {
            $scope.last5transactions = 10;
        }

        /* to show / hide the advanced search fields */
        $scope.IsVisible = false;
        $scope.AdvancedSearch = function() {
            $scope.IsVisible = $scope.IsVisible ? false : true;
        }

        $scope.CardDetailsSection = false;
        $scope.showMoreDetails = function() {
            $scope.CardDetailsSection = true;
        }
        $scope.hideMoreDetails = function() {
            $scope.CardDetailsSection = false;
        }

        $scope.CardGraphSection = true;
        $scope.TransactionSection = true;
        $scope.TransactionDetailsExecuteSection = false;
        $scope.TransactionDetailsConfirmSection = false;
        $scope.StatementDetailSection_Billed = false;
        $scope.StatementDetailSection_UnBilled = false;
        $scope.StatementDetailSection_Pending = false;
        $scope.showTransactionDetails = function() {  
            $scope.TransactionDetailsSection = true;
            $scope.CardGraphSection = false;
            $scope.CardDetailsSection = false;
            $scope.TransactionSection = false;
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = false;
            $scope.TransactionDetailsConfirmSection = false;
            $scope.StatementDetailSection_Billed = false;
            $scope.StatementDetailSection_UnBilled = false;
            $scope.StatementDetailSection_Pending = false;
            //angular.element('#TransactionDetailsSection').trigger('click');
        } 
        $scope.hideTransactionDetails = function() {  
            $scope.TransactionDetailsSection = false;
            $scope.CardGraphSection = true;
            $scope.CardDetailsSection = true
            $scope.TransactionSection = true; 
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = false;
            $scope.TransactionDetailsConfirmSection = false;
            $scope.StatementDetailSection_Billed = false;
            $scope.StatementDetailSection_UnBilled = false;
            $scope.StatementDetailSection_Pending = false;  
            
            $scope.transactionSelected = false;
        }

        $scope.goToExecution = function(){
            $scope.TransactionDetailsSection = false;
            $scope.CardGraphSection = false;
            $scope.CardDetailsSection = false
            $scope.TransactionSection = false; 
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = true;
            $scope.TransactionDetailsConfirmSection = false;
            $scope.StatementDetailSection_Billed = false;
            $scope.StatementDetailSection_UnBilled = false;
            $scope.StatementDetailSection_Pending = false;
        }
        $scope.goToConfirmation = function(){
            $scope.TransactionDetailsSection = false;
            $scope.CardGraphSection = false;
            $scope.CardDetailsSection = false
            $scope.TransactionSection = false; 
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = false;
            $scope.TransactionDetailsConfirmSection = true;
            $scope.StatementDetailSection_Billed = false;
            $scope.StatementDetailSection_UnBilled = false;
            $scope.StatementDetailSection_Pending = false;
        }
        $scope.goToStatementBilled = function(){
            $scope.TransactionDetailsSection = false;
            $scope.CardGraphSection = false;
            $scope.CardDetailsSection = false;
            $scope.TransactionSection = false; 
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = false;
            $scope.TransactionDetailsConfirmSection = false;
            $scope.StatementDetailSection_Billed = true;
            $scope.StatementDetailSection_UnBilled = false;
            $scope.StatementDetailSection_Pending = false;
        }
        $scope.goToStatementUnbilled = function(){
            $scope.TransactionDetailsSection = false;
            $scope.CardGraphSection = false;
            $scope.CardDetailsSection = false;
            $scope.TransactionSection = false; 
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = false;
            $scope.TransactionDetailsConfirmSection = false;
            $scope.StatementDetailSection_Billed = false;
            $scope.StatementDetailSection_UnBilled = true;
            $scope.StatementDetailSection_Pending = false;
        }
        $scope.goToStatementPending = function(){
            $scope.TransactionDetailsSection = false;
            $scope.CardGraphSection = false;
            $scope.CardDetailsSection = false;
            $scope.TransactionSection = false; 
            $scope.CardDetailsSection = false;
            $scope.TransactionDetailsExecuteSection = false;
            $scope.TransactionDetailsConfirmSection = false;
            $scope.StatementDetailSection_Billed = false;
            $scope.StatementDetailSection_UnBilled = false;
            $scope.StatementDetailSection_Pending = true;
        }
        $scope.desputeTransaction = function(){
            $scope.desputeReason = true; 
            $scope.applyNewCard = false; 
        }
        $scope.blockanddespute = function(){
            $scope.desputeReason = false;
            $scope.applyNewCard = true;  
        } 

        $scope.SuccessMessageAction = function(){ 
            $scope.SucessMessage = true;
            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }

        /* show / hide the another branch fields */
        $scope.DeliveryOptions = {selected:'To Another Branch'};

        /* beneficiary type for prepaid card application */
        $scope.BeneficiaryType = {selected:'Self'};
        $scope.PreferredCard = {selected:'Prepaid'};        

        /* mobile number regular expression */ 
        $scope.mobileNumberPattern = /^[0-9]/;


        /* to show hide the form steps from factory */
        VBFormStepService.VBStepControl($scope);

        /* validate the cash advance amount */


        /* to show tag your transaction section  */
        $scope.TagTransactionSection = false;
        $scope.TagTransaction = function() {
            $scope.TagTransactionSection = true;
        }
        $scope.CancelTagTransaction = function() {
            $scope.TagTransactionSection = false;
        }

        $scope.CardType = 'CreditCard';
        $scope.isShown = function(CardType) {
            return CardType === $scope.CardType;
        };

        /* card usage filters */
        $scope.InternetUsage = true;
        $scope.NationalUsage = true;
        $scope.InternationalUsage = true;

        /* supplementary card credit limit type */
        $scope.CreditLimitType = {selected:'Amount'};
        $scope.isShown = function(CreditLimitType) {
            return CreditLimitType === $scope.CreditLimitType;
        };

        $scope.CashLimitType = {selected:'Percentage'};
        $scope.isShown = function(CashLimitType) {
            return CashLimitType === $scope.CashLimitType;
        };

        $scope.paymentoptions = 'MinimumAmount';
        $scope.isShown = function(paymentoptions) {
            return paymentoptions === $scope.paymentoptions;
        };

        /* multi select */
        $scope.moveItem = function(item, from, to) {
            //Here from is returned as blank and to as undefined 
            var idx = from.indexOf(item);
            if (idx != -1) {
                from.splice(idx, 1);
                to.push(item);
            }
        };
        $scope.moveAll = function(from, to) {
            //Here from is returned as blank and to as undefined 
            angular.forEach(from, function(item) {
                to.push(item);
            });
            from.length = 0;
        }; 
        $scope.selectedcountries = [{
            id: 1,
            name: 'Germany'
        }, {
            id: 2,
            name: 'United Kingdom'
        }];
        $scope.availablecountries = [
            {"name": "Afghanistan", "id": "1"}, 
            {"name": "Åland Islands", "id": "2"}, 
            {"name": "Albania", "id": "3"}, 
            {"name": "Algeria", "id": "4"}, 
            {"name": "American Samoa", "id": "5"}, 
            {"name": "AndorrA", "id": "6"}, 
            {"name": "Angola", "id": "7"}, 
            {"name": "Anguilla", "id": "8"}, 
            {"name": "Antarctica", "id": "9"}, 
            {"name": "Antigua and Barbuda", "id": "10"}, 
            {"name": "Argentina", "id": "11"}, 
            {"name": "Armenia", "id": "12"}, 
            {"name": "Aruba", "id": "13"}, 
            {"name": "Australia", "id": "14"}, 
            {"name": "Austria", "id": "15"}, 
            {"name": "Azerbaijan", "id": "16"}, 
            {"name": "Bahamas", "id": "17"}, 
            {"name": "Bahrain", "id": "18"}, 
            {"name": "Bangladesh", "id": "19"}, 
            {"name": "Barbados", "id": "20"}, 
            {"name": "Belarus", "id": "21"}, 
            {"name": "Belgium", "id": "22"}, 
            {"name": "Belize", "id": "23"}, 
            {"name": "Benin", "id": "24"}, 
            {"name": "Bermuda", "id": "25"}, 
            {"name": "Bhutan", "id": "26"}, 
            {"name": "Bolivia", "id": "27"}, 
            {"name": "Bosnia and Herzegovina", "id": "28"}, 
            {"name": "Botswana", "id": "29"}, 
            {"name": "Bouvet Island", "id": "30"}, 
            {"name": "Brazil", "id": "31"}, 
            {"name": "British Indian Ocean Territory", "id": "32"}, 
            {"name": "Brunei Darussalam", "id": "33"}, 
            {"name": "Bulgaria", "id": "34"}, 
            {"name": "Burkina Faso", "id": "35"}, 
            {"name": "Burundi", "id": "36"}, 
            {"name": "Cambodia", "id": "37"}, 
            {"name": "Cameroon", "id": "38"}, 
            {"name": "Canada", "id": "39"}, 
            {"name": "Cape Verde", "id": "40"}, 
            {"name": "Cayman Islands", "id": "41"}, 
            {"name": "Central African Republic", "id": "42"}, 
            {"name": "Chad", "id": "43"}, 
            {"name": "Chile", "id": "44"}, 
            {"name": "China", "id": "45"}, 
            {"name": "Christmas Island", "id": "46"}, 
            {"name": "Cocos (Keeling) Islands", "id": "47"}, 
            {"name": "Colombia", "id": "48"}, 
            {"name": "Comoros", "id": "49"}, 
            {"name": "Congo", "id": "50"}, 
            {"name": "Congo, The Democratic Republic of the", "id": "51"}, 
            {"name": "Cook Islands", "id": "52"}, 
            {"name": "Costa Rica", "id": "53"}, 
            {"name": "Cote D\"Ivoire", "id": "54"}, 
            {"name": "Croatia", "id": "55"}, 
            {"name": "Cuba", "id": "56"}, 
            {"name": "Cyprus", "id": "57"}, 
            {"name": "Czech Republic", "id": "58"}, 
            {"name": "Denmark", "id": "59"}, 
            {"name": "Djibouti", "id": "60"}, 
            {"name": "Dominica", "id": "61"}, 
            {"name": "Dominican Republic", "id": "62"}, 
            {"name": "Ecuador", "id": "63"}, 
            {"name": "Egypt", "id": "64"}, 
            {"name": "El Salvador", "id": "65"}, 
            {"name": "Equatorial Guinea", "id": "66"}, 
            {"name": "Eritrea", "id": "67"}, 
            {"name": "Estonia", "id": "68"}, 
            {"name": "Ethiopia", "id": "69"}, 
            {"name": "Falkland Islands (Malvinas)", "id": "70"}, 
            {"name": "Faroe Islands", "id": "71"}, 
            {"name": "Fiji", "id": "72"}, 
            {"name": "Finland", "id": "73"}, 
            {"name": "France", "id": "74"}, 
            {"name": "French Guiana", "id": "75"}, 
            {"name": "French Polynesia", "id": "76"}, 
            {"name": "French Southern Territories", "id": "77"}, 
            {"name": "Gabon", "id": "78"}, 
            {"name": "Gambia", "id": "79"}, 
            {"name": "Georgia", "id": "80"}, 
            {"name": "Germany", "id": "81"}, 
            {"name": "Ghana", "id": "82"}, 
            {"name": "Gibraltar", "id": "83"}, 
            {"name": "Greece", "id": "84"}, 
            {"name": "Greenland", "id": "85"}, 
            {"name": "Grenada", "id": "86"}, 
            {"name": "Guadeloupe", "id": "87"}, 
            {"name": "Guam", "id": "88"}, 
            {"name": "Guatemala", "id": "89"}, 
            {"name": "Guernsey", "id": "90"}, 
            {"name": "Guinea", "id": "91"}, 
            {"name": "Guinea-Bissau", "id": "92"}, 
            {"name": "Guyana", "id": "93"}, 
            {"name": "Haiti", "id": "94"}, 
            {"name": "Heard Island and Mcdonald Islands", "id": "95"}, 
            {"name": "Holy See (Vatican City State)", "id": "96"}, 
            {"name": "Honduras", "id": "97"}, 
            {"name": "Hong Kong", "id": "98"}, 
            {"name": "Hungary", "id": "99"}, 
            {"name": "Iceland", "id": "100"}, 
            {"name": "India", "id": "101"}, 
            {"name": "Indonesia", "id": "102"}, 
            {"name": "Iran, Islamic Republic Of", "id": "103"}, 
            {"name": "Iraq", "id": "104"}, 
            {"name": "Ireland", "id": "105"}, 
            {"name": "Isle of Man", "id": "106"}, 
            {"name": "Israel", "id": "107"}, 
            {"name": "Italy", "id": "108"}, 
            {"name": "Jamaica", "id": "109"}, 
            {"name": "Japan", "id": "110"}, 
            {"name": "Jersey", "id": "111"}, 
            {"name": "Jordan", "id": "112"}, 
            {"name": "Kazakhstan", "id": "113"}, 
            {"name": "Kenya", "id": "114"}, 
            {"name": "Kiribati", "id": "115"}, 
            {"name": "Korea, Democratic People\"S Republic of", "id": "116"}, 
            {"name": "Korea, Republic of", "id": "117"}, 
            {"name": "Kuwait", "id": "118"}, 
            {"name": "Kyrgyzstan", "id": "119"}, 
            {"name": "Lao People\"S Democratic Republic", "id": "120"}, 
            {"name": "Latvia", "id": "121"}, 
            {"name": "Lebanon", "id": "122"}, 
            {"name": "Lesotho", "id": "123"}, 
            {"name": "Liberia", "id": "124"}, 
            {"name": "Libyan Arab Jamahiriya", "id": "125"}, 
            {"name": "Liechtenstein", "id": "126"}, 
            {"name": "Lithuania", "id": "127"}, 
            {"name": "Luxembourg", "id": "128"}, 
            {"name": "Macao", "id": "129"}, 
            {"name": "Macedonia, The Former Yugoslav Republic of", "id": "130"}, 
            {"name": "Madagascar", "id": "131"}, 
            {"name": "Malawi", "id": "132"}, 
            {"name": "Malaysia", "id": "133"}, 
            {"name": "Maldives", "id": "134"}, 
            {"name": "Mali", "id": "135"}, 
            {"name": "Malta", "id": "136"}, 
            {"name": "Marshall Islands", "id": "137"}, 
            {"name": "Martinique", "id": "138"}, 
            {"name": "Mauritania", "id": "139"}, 
            {"name": "Mauritius", "id": "140"}, 
            {"name": "Mayotte", "id": "141"}, 
            {"name": "Mexico", "id": "142"}, 
            {"name": "Micronesia, Federated States of", "id": "143"}, 
            {"name": "Moldova, Republic of", "id": "144"}, 
            {"name": "Monaco", "id": "145"}, 
            {"name": "Mongolia", "id": "146"}, 
            {"name": "Montserrat", "id": "147"}, 
            {"name": "Morocco", "id": "148"}, 
            {"name": "Mozambique", "id": "149"}, 
            {"name": "Myanmar", "id": "150"}, 
            {"name": "Namibia", "id": "151"}, 
            {"name": "Nauru", "id": "152"}, 
            {"name": "Nepal", "id": "153"}, 
            {"name": "Netherlands", "id": "154"}, 
            {"name": "Netherlands Antilles", "id": "155"}, 
            {"name": "New Caledonia", "id": "156"}, 
            {"name": "New Zealand", "id": "157"}, 
            {"name": "Nicaragua", "id": "158"}, 
            {"name": "Niger", "id": "159"}, 
            {"name": "Nigeria", "id": "160"}, 
            {"name": "Niue", "id": "161"}, 
            {"name": "Norfolk Island", "id": "162"}, 
            {"name": "Northern Mariana Islands", "id": "163"}, 
            {"name": "Norway", "id": "164"}, 
            {"name": "Oman", "id": "165"}, 
            {"name": "Pakistan", "id": "166"}, 
            {"name": "Palau", "id": "167"}, 
            {"name": "Palestinian Territory, Occupied", "id": "168"}, 
            {"name": "Panama", "id": "169"}, 
            {"name": "Papua New Guinea", "id": "170"}, 
            {"name": "Paraguay", "id": "171"}, 
            {"name": "Peru", "id": "172"}, 
            {"name": "Philippines", "id": "173"}, 
            {"name": "Pitcairn", "id": "174"}, 
            {"name": "Poland", "id": "175"}, 
            {"name": "Portugal", "id": "176"}, 
            {"name": "Puerto Rico", "id": "177"}, 
            {"name": "Qatar", "id": "178"}, 
            {"name": "Reunion", "id": "179"}, 
            {"name": "Romania", "id": "180"}, 
            {"name": "Russian Federation", "id": "181"}, 
            {"name": "RWANDA", "id": "182"}, 
            {"name": "Saint Helena", "id": "183"}, 
            {"name": "Saint Kitts and Nevis", "id": "184"}, 
            {"name": "Saint Lucia", "id": "185"}, 
            {"name": "Saint Pierre and Miquelon", "id": "186"}, 
            {"name": "Saint Vincent and the Grenadines", "id": "187"}, 
            {"name": "Samoa", "id": "188"}, 
            {"name": "San Marino", "id": "189"}, 
            {"name": "Sao Tome and Principe", "id": "190"}, 
            {"name": "Saudi Arabia", "id": "191"}, 
            {"name": "Senegal", "id": "192"}, 
            {"name": "Serbia and Montenegro", "id": "193"}, 
            {"name": "Seychelles", "id": "194"}, 
            {"name": "Sierra Leone", "id": "195"}, 
            {"name": "Singapore", "id": "196"}, 
            {"name": "Slovakia", "id": "197"}, 
            {"name": "Slovenia", "id": "198"}, 
            {"name": "Solomon Islands", "id": "199"}, 
            {"name": "Somalia", "id": "200"}, 
            {"name": "South Africa", "id": "201"}, 
            {"name": "South Georgia and the South Sandwich Islands", "id": "202"}, 
            {"name": "Spain", "id": "203"}, 
            {"name": "Sri Lanka", "id": "204"}, 
            {"name": "Sudan", "id": "205"}, 
            {"name": "Suriname", "id": "206"}, 
            {"name": "Svalbard and Jan Mayen", "id": "207"}, 
            {"name": "Swaziland", "id": "208"}, 
            {"name": "Sweden", "id": "209"}, 
            {"name": "Switzerland", "id": "210"}, 
            {"name": "Syrian Arab Republic", "id": "211"}, 
            {"name": "Taiwan, Province of China", "id": "212"}, 
            {"name": "Tajikistan", "id": "213"}, 
            {"name": "Tanzania, United Republic of", "id": "214"}, 
            {"name": "Thailand", "id": "215"}, 
            {"name": "Timor-Leste", "id": "216"}, 
            {"name": "Togo", "id": "217"}, 
            {"name": "Tokelau", "id": "218"}, 
            {"name": "Tonga", "id": "219"}, 
            {"name": "Trinidad and Tobago", "id": "220"}, 
            {"name": "Tunisia", "id": "221"}, 
            {"name": "Turkey", "id": "222"}, 
            {"name": "Turkmenistan", "id": "223"}, 
            {"name": "Turks and Caicos Islands", "id": "224"}, 
            {"name": "Tuvalu", "id": "225"}, 
            {"name": "Uganda", "id": "226"}, 
            {"name": "Ukraine", "id": "227"}, 
            {"name": "United Arab Emirates", "id": "228"}, 
            {"name": "United Kingdom", "id": "229"}, 
            {"name": "United States", "id": "230"}, 
            {"name": "United States Minor Outlying Islands", "id": "231"}, 
            {"name": "Uruguay", "id": "232"}, 
            {"name": "Uzbekistan", "id": "233"}, 
            {"name": "Vanuatu", "id": "234"}, 
            {"name": "Venezuela", "id": "235"}, 
            {"name": "Viet Nam", "id": "236"}, 
            {"name": "Virgin Islands, British", "id": "237"}, 
            {"name": "Virgin Islands, U.S.", "id": "238"}, 
            {"name": "Wallis and Futuna", "id": "239"}, 
            {"name": "Western Sahara", "id": "240"}, 
            {"name": "Yemen", "id": "241"}, 
            {"name": "Zambia", "id": "242"}, 
            {"name": "Zimbabwe", "id": "243"}
        ];

        /* to show the status message */ 
        $scope.UpdateCardPIN = function() {

            $scope.submitForm = function(isValid) {  

                // Set the 'submitted' flag to true
                $scope.submitted = true;                  
                $scope.validationError = false;
                $scope.SucessMessage = false;
                $scope.SamePassword = false;

                // check to make sure the form is completely valid 
                if(!isValid){  
                    $scope.validationError = true;  
                    $scope.SucessMessage = false; 
                    $scope.SamePassword = false;

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }

                // function to submit the account form after all validation has occurred    
                if(isValid){    
                    $scope.validationError = false;
                    $scope.SucessMessage = true;
                    $scope.SamePassword = false;

                    if($scope.ChangeCardPINForm.NewPIN!==$scope.ChangeCardPINForm.ConfirmPIN){
                        $scope.validationError = false;
                        $scope.SucessMessage = false;
                        $scope.SamePassword = true;
                    }

                    $('body,html').animate({
                        scrollTop: $('.page-title').offset().top
                    });
                }  
            } 

            $scope.SucessMessage = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
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

        /* to load required plugins */
        $(function() {
            setTimeout(function() {
                vbDataTable();
                vbRangeSlider();
                vbDateTimePicker();
            }, 100);
        });
    });

})();

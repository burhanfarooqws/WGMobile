vbApp.service('AccTransactions', function () {
    var TransactionData = [
		{'TDate':'30 Sep. 2015 - 11:36 AM', 'TDescb':'Debit Card - 101493373401 - Dubai Mall','TDebit':'1,650.00', 'TCredit':'', 'TBalance':'2,869.00'},
        {'TDate':'25 Sep. 2015 - 05:15 PM', 'TDescb':'Banknet Transfer - 101493373401','TDebit':'', 'TCredit':'12,500.00', 'TBalance':'15,399.00'},
        {'TDate':'29 Aug. 2015 - 09:30 PM', 'TDescb':'ATM Transaction - Fun City','TDebit':'500.00', 'TCredit':'', 'TBalance':'14,899.00'},
        {'TDate':'29 Aug. 2015 - 09:30 PM', 'TDescb':'ATM Transaction - Fun City', 'TDebit':'500.00', 'TCredit':'', 'TBalance':'14,899.00'},
        {'TDate':'01 Sep. 2015 - 09:30 PM', 'TDescb':'ATM Withdrawl - Oasis Center','TDebit':'600.00', 'TCredit':'', 'TBalance':'14,299.00'},
        {'TDate':'30 Sep. 2015 - 11:36 AM', 'TDescb':'Debit Card - 101493373401 - Dubai Mall','TDebit':'1,650.00', 'TCredit':'', 'TBalance':'2,869.00'},
        {'TDate':'25 Sep. 2015 - 05:15 PM', 'TDescb':'Banknet Transfer - 101493373401','TDebit':'', 'TCredit':'12,500.00', 'TBalance':'15,399.00'},
        {'TDate':'29 Aug. 2015 - 09:30 PM', 'TDescb':'ATM Transaction - Fun City','TDebit':'500.00', 'TCredit':'', 'TBalance':'14,899.00'},
        {'TDate':'29 Aug. 2015 - 09:30 PM', 'TDescb':'ATM Transaction - Fun City','TDebit':'500.00', 'TCredit':'', 'TBalance':'14,899.00'},
        {'TDate':'01 Sep. 2015 - 09:30 PM', 'TDescb':'ATM Withdrawl - Oasis Center','TDebit':'600.00', 'TCredit':'', 'TBalance':'14,299.00'},  
	];

    this.getRecords = function (){
        return TransactionData;
    }
}); 
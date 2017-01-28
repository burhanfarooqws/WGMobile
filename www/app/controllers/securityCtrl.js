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
    vbAppServices.controller('SecurityCtrl', function($scope) {

        $scope.SucessMessage = false;
        $scope.UpdateSecuritySettings = function() {
            $scope.SucessMessage = true;

            $('body,html').animate({
                scrollTop: $('.page-title').offset().top
            });
        }
    });

})();

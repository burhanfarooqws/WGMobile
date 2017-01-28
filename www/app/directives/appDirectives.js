/*!
 *
 * This file contains the custum directives to be used in the application.
 *
 * @project   VeriBranch
 * @date      08-10-2015
 * @author    VeriPark
 * @licensor  VeriPark Gulf
 * @site      www.veripark.com
 *
 */

/* to initiate the jquery knob */
vbApp.directive('knob', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            $(element).knob({
                change: function(value) {
                    scope.$apply(function() {
                        $setViewValue(value);
                    })
                }
            });
            ngModel.$render = function() {
                $(element).val(ngModel.$viewValue).trigger('change');
            }
        }
    }; 
});

/* to initiate the jquery slimScroll plugin */
vbApp.directive('vbslimscroll', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).slimscroll({
                height: "300px",
                size: "5px",
                alwaysVisible: true,
            });
        }
    };
});

/* Left navigation directive function */
vbApp.directive('vbleftnavigation', ['$timeout', '$document', function($timeout, $document) {
    return {
        restrict: 'A',
        controller: function($scope, $element, $attrs) {

            var leftNav = $('.left-nav');

            $scope.vbNavBtn = function() {
                var contentHeight = $('.content-wrapper').outerHeight(true); 

                /* to remove the height of the left navigation and keep the minimum height */
                $element.css('min-height', '568px');

                /* to check the window size to toggle the related classes for mobile and desktop */
                if ($(window).width() <= 1024) {
                    leftNav.toggleClass('show');
                    $element.toggleClass('menu-on');
                    $element.css("min-height", contentHeight + 'px');
                } else {
                    $element.toggleClass('menu-on');
                }

                /* function to set the height of the left navigation*/
                $scope.setHeight = function() {
                    $element.css('min-height', contentHeight + 'px');
                };
                $timeout($scope.setHeight, 10, true);
            };

            /* to keep open the left navigation while clicking on that */
            $element.bind('click touchstart', function(event) {
                var isOpen = $element.hasClass('menu-on');
                if (isOpen) {
                    event.stopPropagation();
                }
            });

            /* to close the left navigation to click outside that */
            $('.sub-menu-items > li > a > span').bind('click', function() {

                /* to check the window size to toggle the related classes for mobile and desktop */
                if ($(window).width() <= 1024) {
                    setTimeout(function() {
                        leftNav.removeClass('show');
                        $element.removeClass('menu-on');
                        $element.find('.sub-menu-items').css('display', 'none');
                    }, 1000);

                } else {
                    $element.removeClass('menu-on');
                    $element.find('.sub-menu-items').css('display', 'none');
                }
            });

            /* to close the left navigation to click outside that */
            $('.content-wrapper, .left-nav ul > li:first-child > a , .logo').bind('click', function() {

                /* to check the window size to toggle the related classes for mobile and desktop */
                if ($(window).width() <= 1024) {
                    setTimeout(function() {
                        leftNav.removeClass('show');
                        $element.removeClass('menu-on');
                        $element.find('.sub-menu-items').css('display', 'none');
                    }, 100);

                } else {
                    $element.removeClass('menu-on');
                    $element.find('.sub-menu-items').css('display', 'none');
                }
            });
        }
    };
}]);

vbApp.directive('modal', function() {
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '<h4 class="modal-title">{{ title }}</h4>' +
            '</div>' +
            '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
            '</div>' +
            '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function(value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function() {
                scope.$apply(function() {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});

/* amount directive */
vbApp.directive('vbAmount', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text, total) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, ''); 
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                } 
                $(element).text('$' + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString());   
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}); 

/*
vbApp.directive('uiCurrency', function ($filter, $parse) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModel) {

            function parse(viewValue, noRender) {
                if (!viewValue)
                    return viewValue;

                // strips all non digits leaving periods.
                var clean = viewValue.toString().replace(/[^0-9.]+/g, '').replace(/\.{2,}/, '.');

                // case for users entering multiple periods throughout the number
                var dotSplit = clean.split('.');
                if (dotSplit.length > 2) {
                    clean = dotSplit[0] + '.' + dotSplit[1].slice(0, 2);
                } else if (dotSplit.length == 2) {
                    clean = dotSplit[0] + '.' + dotSplit[1].slice(0, 2);
                }

                if (!noRender)
                    ngModel.$render();
                return clean;
            }

            ngModel.$parsers.unshift(parse);

            ngModel.$render = function() {
                console.log('viewValue', ngModel.$viewValue);
                console.log('modelValue', ngModel.$modelValue);
                var clean = parse(ngModel.$viewValue, true);
                if (!clean)
                    return;

                var currencyValue,
                    dotSplit = clean.split('.');

                // todo: refactor, this is ugly
                if (clean[clean.length-1] === '.') {
                     currencyValue = '$' + $filter('number')(parseFloat(clean)) + '.';

                } else if (clean.indexOf('.') != -1 && dotSplit[dotSplit.length - 1].length == 1) {
                    currencyValue = '$' + $filter('number')(parseFloat(clean), 1);
                } else if (clean.indexOf('.') != -1 && dotSplit[dotSplit.length - 1].length == 1) {
                    currencyValue = '$' + $filter('number')(parseFloat(clean), 2);
                } else {
                     currencyValue = '$' + $filter('number')(parseFloat(clean));
                }

                element.val(currencyValue);
            };

        }
    };
})*/
 
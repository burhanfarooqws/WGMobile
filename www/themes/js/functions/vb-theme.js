/*!
 *
 * This file contains the code for the VeriBank application functions.
 *
 * @project   VeriBranch
 * @date      08-10-2015
 * @author    VeriPark
 * @licensor  VeriPark Gulf
 * @site      www.veripark.com
 *
 */
/*global functions */

/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true */
/*global window, document, $, jQuery*/

var VeriBank = window.VeriBank || {};

(function(window, document, $, VeriBank) {
    "use strict";
    VeriBank.appInteraction = (function() {

        /* Make sure that the sidebar is streched full height */
        var leftNavigation = function() {
            //Get window height and the wrapper height
            var leftNav = $('.left-nav');

            //to enable the treeview for sub menu items
            leftNav.find('.sub-menu').subMenu();
        };

        /* login page scripts */

        var vbLogin = function() {
            $('.cardBasedForm').addClass('hide');
            $('#CardBasedLogin').find('.selection-indicator').addClass('hide');

            $('#UserBasedLogin').on('click touchstart', function(e) {
                e.preventDefault();
                $('.userbasedForm').show();
                $(this).addClass('active');
                $('#CardBasedLogin').removeClass('active');
                $(this).find('.selection-indicator').removeClass('hide').addClass('show');
                $('#CardBasedLogin').find('.selection-indicator').removeClass('show').addClass('hide');
                $('.cardBasedForm').removeClass('show').addClass('hide');
                $('.vb-checkbox-ctrl').show();
            });

            $('#CardBasedLogin').on('click touchstart', function(e) {
                e.preventDefault();
                $('.userbasedForm').hide();
                $(this).addClass('active');
                $('#UserBasedLogin').removeClass('active');
                $(this).find('.selection-indicator').removeClass('hide').addClass('show');
                $('#UserBasedLogin').find('.selection-indicator').removeClass('show').addClass('hide');
                $('.cardBasedForm').removeClass('hide').addClass('show');
                $('.vb-checkbox-ctrl').hide();
            });

            $(".vblogin-keyboard").hide();
            $("#loginKeyboard").click(function(event) {
                if ($(this).is(":checked")) {
                    $(".vblogin-keyboard").show();
                } else {
                    $(".vblogin-keyboard").hide();
                } 
            });

            /* validations */
            $(".numericOnly").keypress(function (e) {
                if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
            });

            /* for credit card fields */
            $("form .numericOnly").on('input', function() {
                if ($(this).val().length == $(this).attr('maxlength')) {
                    $(this).parent().next().find(".numericOnly").focus();
                }
            });

            /* for account creation */
            //$('.cardBasedLogin').hide();  
            $('input[name="LoginType"]').change(function() { 
                var selectedOption = $(this).val(); 
                if(selectedOption=="CardBased"){
                    $('.cardBasedLogin').show(); 
                    $('.cardBasedLogin').find('input[type=text],input[type=password]').attr('required','true'); 
                } else {
                    $('.cardBasedLogin').hide();
                }
            }); 

            /* for create beneficiary */
            //$('.all-benecifiary').hide();
            //$('.domestic-benecifiary').hide(); 
            //$('.int-benecifiary').hide(); 

            //$('input[name="TrasnferType"]').change(function() { 
            //    var selectedOption = $(this).val(); 
               
            //    $('.all-benecifiary').hide();
            //    $('.domestic-benecifiary').hide(); 
            //    $('.int-benecifiary').hide(); 
            
            //    if(selectedOption=="bank"){
            //         $('.all-benecifiary').show(); 

            //    } 
            //    else if(selectedOption=="domestic"){
                    
            //         $('.all-benecifiary').show(); 
            //         $('.domestic-benecifiary').show(); 
            //    }
            //      else if(selectedOption=="international"){
                     
            //         $('.all-benecifiary').show(); 
            //         $('.domestic-benecifiary').show(); 
            //         $('.int-benecifiary').show(); 
            //    }
            //}); 

            /* to show the validation success message */
            $("#AccountCreation, #ForgotPassword, #ResetQuestions").submit(function(e){
                e.preventDefault(); 
                if ($(this)[0].checkValidity()){ 
                    $('.alert').removeClass('hide');
                    $('body,html').animate({
                        scrollTop: $('.alert').offset().top
                    });
                } 
            }); 

        };

        /* Initiate the drag & drop */
        var vbDragDrop = function() {
            $(".connectedSortable").sortable({
                placeholder: "sort-highlight",
                connectWith: ".connectedSortable",
                forcePlaceholderSize: true,
                zIndex: 99999,
            }).disableSelection();
            $(".widget > .weather-info, .widget > .si-title, .widget > .si-title, .widget .picker-switch, .widget .carousel-inner .item").css("cursor", "move");

        };

        /* Initiate Function */
        var initFunction = function() {
            setTimeout(function() {
                leftNavigation();
                //vbDragDrop();
                vbLogin();
            }, 100);
        };

        /* Return public properties/methods */
        return {
            initFunction: initFunction
        };

    }());

}(window, document, jQuery, VeriBank));

/* Bind the footerInteraction function to document load */
jQuery(VeriBank.appInteraction.initFunction);


/*
 callback functions
 */

//left navigation sub menu
(function($) {
    "use strict";

    $.fn.subMenu = function() {

        return this.each(function() {
            var btn = $(this).children('a').first(),
                menu = $(this).children('.sub-menu-items').first(),
                isActive = $(this).hasClass('active'),
                MenuSiblings = $(this).siblings();

            //initialize already active menus
            if (isActive) {
                menu.show();
                btn.find('.fa-angle-left').removeClass('fa-angle-left').addClass('fa-angle-down');
            } else {
                menu.hide();
            }

            //Slide open or close the menu on link click
            btn.on('click touchstart', function(event) {
                //
                //event.stopPropagation();

                if ($(this).parents('nav').hasClass('menu-on')) {
                    if (isActive) {
                        event.preventDefault();
                        //Slide up to close menu
                        menu.slideUp();
                        isActive = false;
                        btn.find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-left');
                        btn.parent('li').removeClass('active');
                    } else {
                        event.preventDefault();
                        //Slide down to open menu  
                        menu.slideDown();
                        isActive = true;
                        btn.find('.fa-angle-left').removeClass('fa-angle-left').addClass('fa-angle-down');
                        btn.parent('li').addClass('active');

                        /* for accordion menu */
                        if (MenuSiblings.hasClass('active')) {
                            MenuSiblings.children('a').find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-left');
                            MenuSiblings.removeClass('active');
                            MenuSiblings.children('.sub-menu-items').slideUp();
                        }
                    }
                }
            });

            /* Add margins to submenu elements to give it a tree look */
            menu.find('li > a').each(function() {
                var pad = parseInt($(this).css('padding-left')) + 40;
                $(this).css({
                    'padding-left': pad + "px"
                });
            });

        });
    };
}(jQuery));

/***************************
 * JS File for CPJ Faq Builder plugin
 * Author: Paul Jarvis
 * ver: 0.1.0
 * License: GNU GPL
 */

jQuery(document).ready(function($){

        $(".faq-question").click(function(){

            $(this).next().toggle();


        });


});//ned document ready
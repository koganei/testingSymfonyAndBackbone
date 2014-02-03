/**
 * A sample Backbone View. 
 *
 * You can set a twig file to render the view with:
 * 
 * <script type="text/html" src="bundles/.../email.html.twig" id="myTwigTemplate">
 * 
 * And then simply feed it to the view on initialization:
 *
 * $.get($('#myTwigTemplate').attr('src'), function(templateData) {
        window.Mindgeek.myEmailView = new EmailView({
            el: '#myRenderDiv',
            tpl: templateData
        });

        myEmailView.render();
    });
 *
 * Then feed it the required events.
 *
 * @namespace Mindgeek
 * @name BarView
 * @class
 *
 * @author Marc Khoury <marc.khoury@mindgeek.com>
 * @date February 2014
 * @requires  BaseView
 */
$(function() {
    Mindgeek.EmailView = Mindgeek.BaseView.extend({
        
        /**
         * View name
         * @type {String}
         */
        name: 'emailView',

        /**
         * set up events for our view
         * @type {Object}
         */
        events: {
            'click .email' : 'select',
            'click .check-email' : 'updateInfo'
        },

        /**
         * sample event
         */
        select : function(e) {
            var $box = $(e.currentTarget);
            $box.toggleClass('selected');
        },
        
        /**
         * Example of a model being changed and the view updated
         * @param  {event}  event   DOM event
         */
        updateInfo: function(event) {
            event.preventDefault();

            App.emails.unshift({
                'from' : 'user@example.com',
                'subject' : 'new subject!',
                'description' : 'some new description'
            });
            this.render();
        }



    });
});
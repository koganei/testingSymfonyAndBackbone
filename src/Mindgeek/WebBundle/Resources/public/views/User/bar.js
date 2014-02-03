/**
 * A sample Backbone View. 
 *
 * You can set a twig file to render the view with:
 * 
 * <script type="text/html" src="somefile.html.twig" id="myTwigTemplate">
 * 
 * And then simply feed it to the view on initialization:
 *
 * $.get($('#myTwigTemplate').attr('src'), function(templateData) {
        window.Mindgeek.myBarView = new BarView({
            el: '#myRenderDiv',
            tpl: templateData
        });

        myBarView.render();
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
 */
$(function() {
    Mindgeek.BarView = Backbone.View.extend({

        /**
         * View name
         * @type {String}
         */
        name: 'barView',

        /**
         * set up events for our view
         * @type {Object}
         */
        events: {
            'click h3' : 'showAlert',
            'click .changeinfo' : 'updateInfo'
        },

        /**
         * The twig template
         * @type {Twig.Template}
         */
        template: twig({data: ''}),

        /**
         * If populated, will be pulled instead of using the template string
         * @type {String}
         */
        url: '',

        /**
         * We initialize the template, this exact function
         * could be superclassed.
         * @param  {Object} options View overrides
         */
        initialize: function(options) {
            this.template = twig({
                id: this.name,
                data: options.tpl
            });

            _.bindAll(this, 'render');
        },

        /**
         * sample event
         */
        showAlert : function() {
            alert('clicked on header!');
        },

        /**
         * Example of a model being changed and the view updated
         * @param  {event}  event   DOM event
         */
        updateInfo: function(event) {
            event.preventDefault();

            App.user = {
                'name' : $('#name').val(),
                'description' : $('#description').val()
            };
            this.render();
        },

        /**
         * Render the twig template and insert it to the element
         */
        render: function() {
            var output = this.template.render({'user' : App.user });
            this.$el.html(output);
        }
    });
});

window.Mindgeek = window.Mindgeek || {};
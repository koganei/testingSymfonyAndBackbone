/**
 * A sample base view to share with all other views.  
 *
 * Initialization options:
 *  - name: the view name
 *  - tpl: the twig template string
 *  - extraTwigVars: additional vars to pass to the twig template
 *  @todo  add model and/or collection support
 *
 * @namespace Mindgeek
 * @name BaseView
 * @class
 *
 * @author Marc Khoury <marc.khoury@mindgeek.com>
 * @date February 2014
 */
$(function() {
    Mindgeek.BaseView = Backbone.View.extend({

        /**
         * View name
         * @type {String}
         */
        name: 'baseView',

        /**
         * The twig template
         * @type {Twig.Template}
         */
        template: twig({data: ''}),

        /**
         * We initialize the template,
         * and set our update bindings.
         * @todo  add support for models, and model event binding
         * @param  {Object} options View overrides
         */
        initialize: function(options) {
            this.name = options.name || this.name;

            this.template = twig({
                id: this.name,
                data: options.tpl
            });

            this.extraTwigVars = options.extraTwigVars;

            _.bindAll(this, 'render');
        },

        /**
         * Render the twig template and insert it to the element
         */
        render: function() {
            var output = this.template.render(this.extraTwigVars);
            this.$el.html(output);
        }
    });
});

window.Mindgeek = window.Mindgeek || {};
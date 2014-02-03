/**
 * Example QUnit Test for a Backbone View
 *
 * let's test baseView!
 */

module( "Base View sanity check", {
    setup: function() {
        this.$viewEl = $('<div id="test-base-view"></div>');
        $('body').append(this.$viewEl);


        this.baseView = new Mindgeek.BaseView({
            name: "test baseView",
            el: this.$viewEl,
            tpl: '{{name}}',
            extraTwigVars: {
                'name': 'testName'
            }
        });
    },

    teardown: function() {
        this.$viewEl.remove();

    }
});
test("test basic class properties", function() {
    // name
    equal(true, this.baseView.name == 'test baseView');
});
test("test template", function() {
    // template
    equal(true, $.isFunction(this.baseView.template.render));
});
test("test extraTwigVars", function() {
    // extraTwigVars
    equal('testName', this.baseView.extraTwigVars.name);
});
test("test render", function() {
    equal(this.baseView.render(), 'testName');
});
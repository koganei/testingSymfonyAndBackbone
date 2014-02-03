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
test("test template from url", function() {
    // template
    newbaseView = new Mindgeek.BaseView({
        name: "newbaseView",
        el: this.$viewEl,
        url: '/bundles/mindgeekweb/views/User/bar.html.twig', // @todo use symfony js routing to get the url
        extraTwigVars: {
            'user': {
                'name': 'testName',
                'description': 'Some description'
            }
        }
    });

    equal(true, $.isFunction(newbaseView.template.render));
    equal(true, newbaseView.template.render(newbaseView.extraTwigVars).indexOf('testName') != -1);
    equal(true, newbaseView.template.render(newbaseView.extraTwigVars).indexOf('Some description') != -1);
});
test("test extraTwigVars", function() {
    // extraTwigVars
    equal('testName', this.baseView.extraTwigVars.name);
});
test("test render", function() {
    equal(this.baseView.render(), 'testName');
});
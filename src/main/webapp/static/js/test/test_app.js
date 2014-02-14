require(['underscore', 'jquery', 'jasmine', 'jasmine-html'], function(_, $, jasmine){

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('test/patientViewTest');
    specs.push('test/patientFormViewTest');

    $(function(){
        require(specs, function(){
            jasmineEnv.execute();
        });
    });

});

const ReportportalAgent = require('./node_modules/agent-js-jasmine/lib/reportportal-agent.js');
const reportportalConfig = require('./reportportalConf.js');
let agent;

exports.config = 
{
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['spec.js'],
    onPrepare: function () 
    {
        require("babel-core/register")({presets: ["es2015"]});
        
        agent = new ReportportalAgent(reportportalConfig);
        jasmine.getEnv().addReporter(agent.getJasmineReporter());

    },

    afterLaunch(number) {
    return agent.getExitPromise();
    }
};
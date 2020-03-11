exports.config = 
{
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:['spec.js'], 
    directConnection: true,
    onPrepare: function () 
    {
        require("babel-core/register")({presets: ["es2015"]});
    }
}
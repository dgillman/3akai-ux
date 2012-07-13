/**
* Load the standard config.js, then load the dynamic config JSON.
* Update top-level array elements in config/config with the 
* dynamic config options.
*/
define(
    [
        "jquery",
        "config/config",
        "/system/dynamic-config/config.cachekey.json?callback=define",
    ],
    function($, config, configurationMetaData) {
        var dynamicconfigURL = "/system/dynamic-config/config.";
        if (configurationMetaData.configurationCacheKey) {
            dynamicconfigURL += configurationMetaData.configurationCacheKey + ".";
        }
        dynamicconfigURL += "js";

        $.ajax({
            url: dynamicconfigURL,
            cached: true,
            async: false,
            dataType: 'text',
            success: function(text){
                // eval the Javascript in this context so it has access to the config
                eval(text);
            },
            error: function (jqXHR, textStatus, errorThrown){
                if (window.console){
                    console.log("An error occurred while loading the custom configuration.");
                }
            }
        });
        return config;
    }
);
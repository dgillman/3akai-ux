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
        dynamicconfigURL += "json";

        $.ajax({
            url: dynamicconfigURL,
            dataType: 'json',
            async: false,
            success: function (data){
                $.each(data, function(index,value){
                    config[index] = value;
                });
            },
            error: function (jqXHR, textStatus, errorThrown){
                if (window.console){
                    console.log("The dynamic config JSON is malformed. Check your custom config file.")
                }
            }
        });
        return config;
    }
);
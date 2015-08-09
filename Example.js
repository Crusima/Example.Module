(function(plugin) {
    'use strict';

    var Module = (function() {
        var _version   = '1.0.0';
        var _namespace = 'CTW2.Plugin.Example';

        function Example() {
        }

        Example.prototype.getVersion = function() {
            return _version;
        };

        Example.prototype.getNamespace = function() {
            return _namespace;
        };

        Example.prototype.run = function() {
            // this will be run when the plugin is started
        };

        Example.prototype.stop = function() {
            // this will be run when the plugin is stopped
            // this also happens when an existing plugin is up-/downgraded
        };

        return Example;
    }());

    var module = new Module();

    newPluginName = module.getNamespace();

    plugin.registerAndRun(module);
}(_mainPlugin));

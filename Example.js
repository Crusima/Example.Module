(function(plugin) {
    'use strict';

    var Module = (function() {
        var _version   = '1.0.1';
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
            alert('Example module started');
        };

        Example.prototype.stop = function() {
            alert('Example module stopped');
        };

        return Example;
    }());

    var module = new Module();

    newPluginName = module.getNamespace();

    plugin.registerAndRun(module);
}(_mainPlugin));

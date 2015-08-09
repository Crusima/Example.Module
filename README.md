# Example.Module

This is a reference module for 3rd party developers

## Developing a module

### Anatomy of a module

All modules should be wrapped in a IIFE and the main plugin should be passed as the first argument:

    (function(plugin) {
        // specific code for your module here
    }(_mainPlugin));

All modules should at least contain (at least) the following four methods:

    getVersion() // returns a string containing the version of the module, e.g. 1.0.0
    getNamespace() // returns a string containing the namespace of the module, e.g. YourName.Namespace.PluginName
    run() // this should contain the code which is needed to setup the plugin actions when it is activated / started. An example of this is registering event listeners
    stop() // this should contain the code to cleanup once the plugin is removed or updated. An example of this is removing event listeners
    
Modules should return themselves from the IIFE.

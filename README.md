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

### Versioning

When developing modules always use [semantic versioning 2.0.0][semver]. This makes sure that people who use your module have some understanding what has changed and taht things may have been broken.

### Namespacing

When picking a namespace for your module pick a unqiue name. This is to prevent conflicts with other modules, not only from yourself, but also from other module developers.

## Support

Not mandatory, but a "nice thing to do ™" is to have a way for your users to contact you for support. Either in-game, on GitHub or some other way.

## Distributing modules

Once you are ready to distribute your module minify the source code and make both the original and the minified files available. The original source code is used to easily verifiy the functionality of the module and the minified version is used by people to install your module.

Currently the modules are stored in local storage in the client's browser meaning we have limited space available for all modules. This means all modules (including yours and others) add up to the space of the same local storage.

To keep naming consistent across modules always name your minified modules `{Name.Of.Your.Module}.min.js`.

## Implementation help

If you need help with an implementation feel free to open an issue right here on GitHub or shoot me an in-game mail and if I can I will help you with any questions.

[semver]: http://semver.org/

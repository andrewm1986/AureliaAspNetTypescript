'use strict';
var GulpConfig = (function () {
    function GulpConfig() {

        this.sourceRoot = './';
        this.sourceFiles = this.sourceRoot + 'StaticContent/js';

        this.rootOutputPath = this.sourceRoot + 'wwwroot';
        this.tsOutputPath = this.rootOutputPath + '/js';
        this.allJavaScript = [this.sourceFiles + '/**/*.js'];
        this.allTypeScript = this.sourceFiles + '/**/*.ts';

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;
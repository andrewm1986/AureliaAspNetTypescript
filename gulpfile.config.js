'use strict';
var GulpConfig = (function () {
    function GulpConfig() {

        this.sourceRoot = './';
        this.sourceTsFiles = this.sourceRoot + 'StaticContent/js';
        this.sourceScssFiles = this.sourceRoot + 'StaticContent/css';

        this.rootOutputPath = this.sourceRoot + 'wwwroot';
        
        this.tsOutputPath = this.rootOutputPath + '/js';
        this.allJavaScript = [this.sourceTsFiles + '/**/*.js'];
        this.allTypeScript = this.sourceTsFiles + '/**/*.ts';
        
        this.scssOutputPath = this.rootOutputPath + '/css';
        this.allScss = this.sourceScssFiles + '/**/*.scss';
        

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;
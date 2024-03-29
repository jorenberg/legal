#!/usr/bin/env node


/*!
 * Legal® [v1.0.0]
 * ______________________________________________________________
 * Grunt, http://gruntjs.com/
 * The JavaScript Task Runner.
 * ______________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/]
 * @copyright : Sequømics Corporation [http://sequomics.com/]
 * ______________________________________________________________
 * @date      : 01-Dec-2015
 * @require   : Node.js®
 * @require   : NPM
 * ______________________________________________________________
 */
 
// # Usage: $ node -v
// # Usage: $ npm -v

/*!
 * --/The Heart of Build System/-- of "Legal®".
 * ______________________________________________________________
 */
// =========================
// Grunt Module(s) Required.
// =========================
// main module.
// @require   : grunt
// @require   : grunt-cli

// required utility module
// linter module
// @require   : grunt-htmlhint
// @require   : grunt-scss-lint
// @require   : grunt-contrib-csslint
// @require   : grunt-contrib-jshint

// minifier module
// @require   : grunt-contrib-htmlmin
// @require   : grunt-contrib-cssmin

// helper module
// @require   : grunt-contrib-concat
// @require   : grunt-contrib-copy
// @require   : grunt-contrib-clean
// @require   : grunt-sync-pkg

// miscellaneous module
// @require   : jit-grunt
// @require   : time-grunt

// BUILD MODULE
// ============
// @require   : assemble

// Note: To import project metadata into the Grunt config.
// @require   : package.json
// @require   : _config.yml

// ====================================
// Grunt Task Registration through API.
// ====================================
// @method    : grunt.loadNpmTasks(pluginName)
// @method    : grunt.registerTask(task-name)

// Grunt Task(s):-----------------------------------------
// 1. Task for "Linter" - HTML, SCSS, CSS and JavaScript,
// 2. Task for "Minifier" - HTML and CSS,
// 3. Task for "clean files and folders",
// 4. Task for "Assemble": Default, and
// 5. Task for "Travis CI", using ".travis.yml" from root.


/* Invoking strict mode. */
"use strict";

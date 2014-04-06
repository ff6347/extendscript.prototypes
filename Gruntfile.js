/*global module:false*/
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),
    /**
     * this minifiys the json2.js
     */
    // uglify: {
    //   options: {
    //     mangle: false
    //   },
    //   target_json: {
    //     files: {
    //       'src/tmp/json2.min.js': ['src/lib/JSON-js/json2.js']
    //     }
    //   }
    // },
    /**
     * copy the main script into temp and give it package name and version
     */
    // copy: {
    //   script: {
    //     src: "src/locations/main.jsx",
    //     dest: "src/tmp/<%= pkg.name %>.copy.<%= pkg.version %>.jsx",
    //   }

    // },

    /**
     * wrap into anonymous function
     */
    // wrap: {
    //   script: {
    //     src: ['src/tmp/<%= pkg.name %>.copy.concat.<%= pkg.version %>.jsx'],
    //     dest: 'dist/<%= pkg.name %>.build.<%= pkg.version %>.jsx',
    //     options: {
    //       wrapper: ['(function(thisObj) {', '})(this);\n']
    //     },
    //   }
    // },
    /**
     * concat all the pieces into whan file ready for wrapping
     * @type {Object}
     */
    concat: {
      dist: {
        options: {
          stripBanners: true,
          banner: '\n/*! <%= pkg.name %>.jsx - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          nonull: true,
          separator: '\n',
        },

        src: [
          "src/Prototypes.jsx",
          "src/Array.where.jsx",
          "src/String.localeCompare.jsx",

        ],

        dest: "dist/<%= pkg.name %>.<%= pkg.version %>.jsx",
      }
    },

    watch: {
      files: ['src/*.jsx'],
      tasks: ['concat:dist']
    }

  });
  // These plugins provide necessary tasks.
  // Default task.
  //
  // // This is required if you use any options.
  grunt.task.run('notify_hooks');

  grunt.registerTask('build-dist', ['concat:dist']);
  // Default task.
  grunt.registerTask('default', ['watch']);
};
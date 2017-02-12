
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {                          // Task
            dynamic: {
            options: {
                optimizationLevel: 3,
                progressive: true,
                use: [pngquant(), mozjpeg(), gifsicle()]
            },                         // Another target
            files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: 'img/',                   // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                dest: 'img/'                  // Destination path prefix
            }]
          }
        },
        uglify: {
            main: {
                src: '_assets/js/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less" ,   
                    "css/homepage.css": "less/homepage.less"           
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less",
                    "css/homepage.min.css": "less/homepage.less",
                    "css/syntax.min.css": "css/syntax.css",
                    "css/web-fonts/west-european.min.css": "css/web-fonts/west-european.css"
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
        jekyll: {                             // Task
            options: {                          // Universal options
                bundleExec: true,
                //src : '<%= site %>'
            },
            dist: {                             // Target
                options: {                        // Target options
                    dest: '<%= dist %>',
                    config: '_config.yml,_config.build.yml'
                }
            },
            serve: {                            // Another target
                options: {
                    serve: true,
                    dest: '_site',
                    drafts: true,
                    future: true
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');

    // Default task(s).
    //grunt.registerTask('default', ['imagemin','uglify', 'less', 'usebanner']);
    grunt.registerTask('default', [ 'uglify', 'less', 'usebanner', 'jekyll:serve']);

};

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqnull: true,
                eqeqeq: true,
                globals: {
                    jQuery: true
                }
            },
            '<%= pkg.name %>': {
                src: [ 'assets/js/**/*.js' ]
            }
        },

        concat: {
            dist: {
                src: ['assets/js/*.js'],
                dest: 'www/js/build.js'
            }
        },

        uglify: {
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'www/js/build.js',
                dest: 'www/js/build.min.js'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "www/css/style.css": "assets/less/style.less"
                }
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'www/css/style.min.css' : ['www/css/style.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'assets/img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'www/img/'                  // Destination path prefix
                }]
            }
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify', 'removelogging']
            },
            css: {
                files: ['assets/less/*.less'],
                tasks: ['less', 'cssmin']
            },
            image: {
                files: ['assets/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        },

        removelogging: {
            dist: {
                src: "www/js/build.min.js",
                dest: "www/js/build.clean.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin', 'imagemin', 'removelogging', 'watch']);
    grunt.registerTask('debug', ['jshint']);

};
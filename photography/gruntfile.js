module.exports = function (grunt) {
    grunt.initConfig({
        
        // define source files and their destinations
        uglify: {
            files: { 
                src: 'assets/js/*.js',  // source files mask
                dest: 'dist/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: false,   // remove all unnecessary nesting
                ext: '.min.js'   // replace .js to .min.js
            }
        },
        image_resize: {
            resize: {
              options: {
                width: 512,
                upscale: true
              },
              src: 'images/fulls/*',
              dest: 'images/thumbs/'
            }
          },
        // full: {
        //     resize: {
        //       options: {
        //         width: 1024,
        //       },
        //       src: 'images/fulls/*.JPG',
        //       dest: 'images/fulls'
        //     }
        //   },
        sass: {
              options: {
                sourcemap: 'auto',
                style: 'compressed',
                compass: false
              },
              files: {
                ' assets/js/main.js':' assets/sass/main.scss'
            }
          },
        watch: {
            js:  { files: 'assets/js/*.js', tasks: [ 'uglify' ] },
            sass:  { files:'assets/scss/*.scss', tasks: [ 'sass' ] },
           
        },
    });
    
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-image-resize');
    
    // register at least this one task
    grunt.registerTask('default', [ 'uglify' ]);
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['image_resize']);
    // grunt.registerTask('default', ['full']);
    
    
};
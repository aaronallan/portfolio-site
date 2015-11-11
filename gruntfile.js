module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  watch: {
    stylus: {
      files: './css/base.styl',
      tasks: ['stylus','concat']
    }
  },
      
  stylus: {
    compile: {
      options: { 
        paths: ["./css/"],
        import: [ 'nib' ]
      },
      files: {
        "./css/base.css": ["./css/base.styl"]
      }
    }
  },

  concat: {
    css: {
      src: [
        "./css/reset.css",
        "./css/base.css"
      ],
      dest: "./css/style.css"
    },

    libs: {
        src: [
            './js/jquery-1.9.1.min.js',
            './js/jquery-ui-1.10.4.custom.min.js',
            './js/waypoints.min.js',
            './js/waypoints-sticky.min.js' 
        ],
        dest: './js/build/libs-production.js',
    },

    functions: {
        src: [
            './js/ajaxcontact.js',
            './js/functions.js' 
        ],
        dest: './js/build/production.js',
    }
  },

  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        './js/build/libs-production-min.js': ['./js/build/libs-production.js'],
        './js/build/production-min.js': ['./js/build/production.js'],

      }
    }
  },

  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: '_/img',
            src: ['**/*.{png,jpg}'],
            dest: '_/img/build/'
        }]
    }
  }

});

//Load Plug In(s)
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');

// Default task(s).
grunt.registerTask('build', ['stylus', 'concat', 'uglify', 'watch']);
grunt.registerTask('optimize', ['imagemin']);

};
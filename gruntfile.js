module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  watch: {
    stylus: {
      files: './_/css/base.styl',
      tasks: ['stylus','concat']
    }
  },
      
  stylus: {
    compile: {
      options: { 
        paths: ["./_/css/"],
        import: [ 'nib' ]
      },
      files: {
        "./_/css/base.css": ["./_/css/base.styl"]
      }
    }
  },

  concat: {
    css: {
      src: [
        "./_/css/reset.css",
        "./_/css/base.css"
      ],
      dest: "./_/css/style.css"
    },

    libs: {
        src: [
            '_/js/jquery-1.9.1.min.js',
            '_/js/jquery-ui-1.10.4.custom.min.js',
            '_/js/waypoints.min.js',
            '_/js/waypoints-sticky.min.js' 
        ],
        dest: '_/js/build/libs-production.js',
    },

    functions: {
        src: [
            '_/js/ajaxcontact.js',
            '_/js/functions.js' 
        ],
        dest: '_/js/build/production.js',
    }
  },

  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        '_/js/build/libs-production-min.js': ['_/js/build/libs-production.js'],
        '_/js/build/production-min.js': ['_/js/build/production.js'],

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
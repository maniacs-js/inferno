module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/bootstrap.js': 'src/bootstrap.js',
          'build/inferno.js': 'src/inferno.js'
        }
      }
    },
    browserify: {
      'dist/inferno.js': ['build/bootstrap.js']
    },
    uglify: {
      options: {
        banner: '/*! InfernoJS <%= grunt.template.today("yyyy-mm-dd") %> */ '
      },
      build: {
        src: 'dist/inferno.js',
        dest: 'dist/inferno.min.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [
    'babel',
    'browserify',
    'uglify'
  ]);
}
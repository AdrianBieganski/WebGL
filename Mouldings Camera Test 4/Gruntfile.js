module.exports = function(grunt) {
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
    concat: {
	  options: {
		// define a string to put between each file in the concatenated output
		separator: ';'
	  },
	  dist: {
		// the files to concatenate
		src: ['scripts/*.js'],
		// the location of the resulting JS file
		dest: 'min/min.js'
	  }
	},
	uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'min/ugly.js': ['<%= concat.dist.dest %>']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);
};

// http://jaketrent.com/post/run-requirejs-with-gruntjs/
// https://www.webcodegeeks.com/javascript/requirejs/grunt-requirejs-example/
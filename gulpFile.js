const gulp = require('gulp');
const gSass = require('gulp-sass');
const bSync  =require('browser-sync').create();

// Task 1 compile your sass 
gulp.task('sass', ()=>{
    return gulp.src(['src/scss/*.scss'])
    .pipe(gSass())
    .pipe(gulp.dest('src/css'))
    .pipe(bSync.stream())
});

// watch && Serve
gulp.task('serve', ['sass'], ()=>{
    bSync.init({
        server:'./src'
    });
    gulp.watch(['src/scss/*.scss'],['sass']);
    gulp.watch(['src/*.html']).on('change', bSync.reload);
}); 



// default 
gulp.task('default', ['serve']);
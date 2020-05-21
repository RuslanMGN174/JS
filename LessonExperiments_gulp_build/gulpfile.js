const gulp = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-minify");

gulp.task("build", (done) => {
    gulp.src("hello_lesson_14.js")
        .pipe(babel())
        .pipe(minify())
        .pipe(gulp.dest("./build"))
        done();
});
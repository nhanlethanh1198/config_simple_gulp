const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const browserSync = require("browser-sync").create()

// compile scss to css
function style() {
  /**
   *  1. Where is scss file
   *  2. Pass file through sass complier
   *  3. Where do I save the complied CSS?
   *  4. Stream changes to all browser
   */

  // 1. Where is scss file
  return (
    gulp
      .src("./scss/**/*.scss")
      // 2. Pass file through sass complier
      .pipe(sass())
      // 3. Where do I save the complied CSS?
      .pipe(gulp.dest("./css"))
      //  4. Stream changes to all browser
      .pipe(browserSync.stream())
  )
}

function styleWithSass() {
  return gulp
    .src("./sass/**/*.sass")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  })
  gulp.watch("./scss/**/*.scss", style)
  gulp.watch("./sass/**/*.sass", styleWithSass)
  gulp.watch("./*.html").on("change", browserSync.reload)
  gulp.watch("./js/**/*.js").on("change", browserSync.reload)
}

exports.style = style
exports.styleWithSass = styleWithSass
exports.watch = watch

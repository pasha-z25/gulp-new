import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.sync.stream());
};

import webpack from 'webpack-stream';

export const scripts = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      webpack({
        mode: 'development',
        devtool: 'source-map',
        output: {
          filename: 'app.min.js',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js));
};

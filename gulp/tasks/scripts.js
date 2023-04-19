import webpack from 'webpack-stream';
import TerserPlugin from 'terser-webpack-plugin';

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
        optimization: {
          minimize: true,
          minimizer: [new TerserPlugin()],
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.sync.stream());
};

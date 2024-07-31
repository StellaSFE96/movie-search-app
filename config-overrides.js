module.exports = function override(config, env) {
    // Enable hot reloading for styled components
    config.module.rules.push({
      test: /\.js$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
      include: /node_modules/,
    });
  
    // Enable hot reloading for react components
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      include: /src/,
    });
  
    return config;
  };
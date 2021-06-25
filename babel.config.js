module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/screens/components',
          utils: './src/utils',
          assets: './src/assets',
          services: './src/services',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};

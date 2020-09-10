module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          'app': ['./src/app'],
          'api': ['./src/api'],
          'entities': ['./src/entities'],
          'navigation': ['./src/navigation'],
          'components': ['./src/components'],
          'routes': ['./src/routes'],
          'state': ['./src/state'],
          'utils': ['./src/utils'],
          'auth': ['./src/auth'],
          'services': ['./src/services'],
        },
      },
    ],
    ["babel-plugin-inline-import", {
      "extensions": [
        ".svg"
      ]
    }],
  ],
};

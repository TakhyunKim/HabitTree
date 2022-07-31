module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@utils': './src/utils',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@recoil': './src/recoil',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@components': './src/components',
          '@containers': './src/containers',
        },
      },
    ],
  ],
};

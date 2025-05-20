import { UserConfig } from '@farmfe/core';

function defineConfig(config: UserConfig): UserConfig {
  return config;
}

export default defineConfig({
  compilation: {
    input: {
      index: './index.html'
    },
    output: {
      path: 'build',
      publicPath: '/',
      targetEnv: 'browser'
    }
  },
  plugins: [
    '@farmfe/plugin-react',
  ]
});

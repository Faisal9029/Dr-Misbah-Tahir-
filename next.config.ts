import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

const nextConfig = {
  webpack(config) {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

export default nextConfig;

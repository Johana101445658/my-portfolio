import path from 'path';

export default {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

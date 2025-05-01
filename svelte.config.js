import adapter from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/recursive-closures'
    }
  }
};

export default config;




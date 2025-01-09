module.exports = {
    apps: [
      {
        name: 'kampair',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
        env_production: {
          NODE_ENV: 'production',
        },
        env_file: '.env', 
      },
    ],
  };
  
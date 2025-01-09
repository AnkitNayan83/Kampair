module.exports = {
  apps: [
    {
      name: "kampair",
      script: "npm run start",
      log_date_format: "MMMM D YYYY, h:mm:ss a, Z",
      kill_timeout: 1500,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,
      },
      env_file: ".env",
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "${{ secrets.EC2_PUBLIC_IP }}",
      path: "/kapair",
      repo: "git@github.com:AnkitNayan83/Kampair.git", 
      ref: "origin/main",
      "post-deploy":
        "git reset --hard && git pull origin main && npm ci && NODE_ENV=production npm run build && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};

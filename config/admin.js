module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e82f4b89595311d0eda6b992f71fc5a5'),
  },
});

const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';
export const logStars = function(msg) {
  console.info('************');
  console.info(msg);
  console.info('************');
};
export default {
  port: env.PORT || 8080
};

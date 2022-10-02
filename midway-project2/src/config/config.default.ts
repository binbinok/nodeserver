import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1664434710781_4799',
  koa: {
    port: 7002,
  },
  view: {
    defaultViewEngine: 'nunjucks',
  },
} as MidwayConfig;

// @ts-check
import {defineConfig, envField} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: "https://todoconta.com",
  integrations: [tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"],
    }
  })],
  experimental: {
    env: {
      schema: {
        API_URL_SENDY: envField.string({context: "client", access: "public", default: "https://sendy.todoconta.com"}),
        API_KEY_SENDY: envField.string({context: "client", access: "public", default: "5a7Ijeup4Dmx0S3QghQ3"}),
        LIST_ID_SENDY: envField.string({context: "client", access: "public", default: "k10AD2h1Bu4fTfy763prrdpA"}),
        WA_NUMBER: envField.string({context: "client", access: "public", default: "5215544753602"})
      }
    }
  }
});
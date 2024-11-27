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
  redirects: {
    '/xmlsatpremium': '/producto/xmlsat-premium/',
    '/xmlsat': '/producto/xmlsat/',
    '/controlxml': '/producto/control-xml-cfdi/',
    '/controlxmlnom': '/producto/control-xml-nomina/',
    '/conciliarep': '/producto/conciliarep/',
    '/xmlctpqi': '/producto/xml-a-contpaqi/',
    '/csd': '/certificado-sello-digital-csd',
    '/wss': '/web-service-sat/',
    '/dp': '/deducciones-personales/',
    '/fe': '/firma-electronica/',
    '/ie': '/ingresos-gravados-exentos-isr/',
    '/xmlctpqi-demo': 'https://bit.ly/2Ly9ioI',
    '/xmlcontpaq-demo': 'https://bit.ly/2Ly9ioI',
    '/controlxml-demo': 'https://bit.ly/3q6Orb4',
    '/controlxmlnom-demo': 'https://bit.ly/3rFHC0q',
    '/conciliarep-demo': 'https://bit.ly/37eQ2ED',
    '/xmlsatpremium-demo': 'http://softwarepaq2.com/downloads/software/SetupXMLSAT_PREMIUM.exe',
    '/xmlsat-demo': 'http://softwarepaq2.com/downloads/software/SetupXMLSAT.exe',
    '/alegra': 'https://app.alegra.com/user/register/country/mexico?coupon=CNTODOCONTA'
  },
  experimental: {
    env: {
      schema: {
        API_URL_SENDY: envField.string({context: "client", access: "public"}),
        API_KEY_SENDY: envField.string({context: "client", access: "public"}),
        LIST_ID_SENDY: envField.string({context: "client", access: "public"}),
        WA_NUMBER: envField.string({context: "client", access: "public"})
      }
    }
  }
});
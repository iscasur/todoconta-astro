/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly SENDY_API_URL: string;
  readonly SENDY_API_KEY: string;
  readonly SENDY_LIST_ID: string;
  readonly WA_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

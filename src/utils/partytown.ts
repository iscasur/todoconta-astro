export default {
  resolveUrl(url: URL): URL {
    if (url.hostname === "connect.facebook.net") {
      const proxyUrl = new URL(
        "https://todoconta-astro.vercel.app/proxy-connect-facebook"
      );
      proxyUrl.searchParams.append("url", url.href);
      return proxyUrl;
    }
    return url;
  },
  forward: ["fbq"],
};

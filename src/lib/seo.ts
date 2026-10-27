export function seo(
  title: string,
  description: string,
  { noIndex = false }: { noIndex?: boolean } = {},
) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(noIndex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
  };
}

export function notFoundSeo() {
  return seo(
    "Page Not Found | CREATOV",
    "This page could not be found. Explore CREATOV services, browse our FAQs or get in touch with our team.",
    { noIndex: true },
  );
}

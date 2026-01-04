import { useEffect } from "react";

const useMeta = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage
}) => {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    const setMeta = (attr, key, value) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    if (description) setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    if (ogTitle) setMeta("property", "og:title", ogTitle);
    if (ogDescription) setMeta("property", "og:description", ogDescription);
    if (ogImage) setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");

    if (canonicalUrl) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }
  }, []);
};

export default useMeta;
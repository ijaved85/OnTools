import { useEffect } from "react";

const useMeta = data => {
    useEffect(() => {
        if (!data) return;

        document.title = data.title || "Default Title";

        const metaMap = {
            description: data.description,
            keywords: data.keywords,
            "og:title": data.ogTitle,
            "og:description": data.ogDescription,
            "twitter:card": "summary_large_image",
            "twitter:title": data.ogTitle,
            "twitter:description": data.ogDescription
        };

        Object.entries(metaMap).forEach(([name, content]) => {
            if (!content) return;

            let element = document.querySelector(
                `meta[name="${name}"], meta[property="${name}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                if (name.includes("og:") || name.includes("twitter:")) {
                    element.setAttribute("property", name);
                } else {
                    element.setAttribute("name", name);
                }
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        });

        if (data.canonicalUrl) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", data.canonicalUrl);
        }
    }, [data]);
};

export default useMeta;

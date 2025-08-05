"use client";

import { usePathname } from "next/navigation";

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null;

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment.replace(/-/g, " ")));

  const breadcrumbItems = segments.map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    item: `https://dailynewzmail.com/${segments.slice(0, index + 1).join("/")}`,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 0,
        name: "Home",
        item: "https://dailynewzmail.com/",
      },
      ...breadcrumbItems,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}

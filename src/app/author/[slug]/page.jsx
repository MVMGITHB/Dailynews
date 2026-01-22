import AuthorPage from "@/components/authorSection/authorProfile";
import { base_url } from "@/components/Helper/helper";
import axios from "axios";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  // console.log("Slug is " , slug);
  try {
   const response = await axios.get(
  `${base_url}/api/auth/singleUserbyslug/${slug}`
);


const author = response.data?.[0]; // use directly


// console.log("author", author); // this works


    if (!author) {
      return {
        title: "Author Not Found | Daily News Mail",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${base_url}/author/${slug}`,
        },
      };
    }

    const fullName = `${author?.name}`;
    const bio =
      author.shortBio ||
      `Read articles and insights by ${fullName} on Daily News Mail.`;

    const imageUrl = author?.image
      ? author?.image.startsWith("http")
        ? author?.image
        : `${base_url}${author?.image}`
      : `${base_url}/images/default-user.png`;

    return {
      title: `${fullName} – Articles & Insights | Daily News Mail`,
      description:  `Explore articles, insights, and latest news by ${fullName} on Daily News Mail.`,

      alternates: {
        canonical: `https://dailynewzmail.com/author/${slug}`,
      },

      openGraph: {
        title: `${fullName} – Articles & Insights | Daily News Mail`,
      description:  `Explore articles, insights, and latest news by ${fullName} on Daily News Mail.`,
        url: `https://dailynewzmail.com/author/${slug}`,
        siteName: "Daily News Mail",
        type: "profile",
        images: [
          {
            url: `${base_url}${author?.image}`,
            width: 1200,
            height: 630,
            alt: `${fullName} – Author at Daily News Mail`,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: `${fullName} | Daily News Mail`,
        description: `Read articles and insights by ${fullName} on Daily News Mail.`,
        
      },
    };
  } catch {
    return {
      title: "Author Profile | Daily News Mail",
      description: "Author information could not be loaded at this time.",
      alternates: {
        canonical: `https://dailynewzmail.com/author/${slug}`,
      },
    };
  }
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ REQUIRED

  let author = null;

  try {
    const response = await axios.get(
      `${base_url}/api/auth/singleUserbyslug/${slug}`
    );
    author = response.data?.[0];
  } catch (error) {
    console.error("Author fetch error:", error);
  }

  const fullName = author?.name || "Author";
  const imageUrl = author?.image
    ? author.image.startsWith("http")
      ? author.image
      : `${base_url}${author.image}`
    : `${base_url}/images/default-user.png`;

  return(
    <>


    {author && (
        <Script
          id="author-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `https://dailynewzmail.com/author/${slug}`,
              "name": fullName,
              "url": `https://dailynewzmail.com/author/${slug}`,
              "image": imageUrl,
              "description":
                author.shortBio ||
                `Author at Daily News Mail contributing news and articles.`,
              "jobTitle": "Author",
              "worksFor": {
                "@type": "Organization",
                "name": "Daily News Mail",
                "url": "https://dailynewzmail.com",
              },
              "sameAs": [
                author.facebook,
                author.twitter,
                author.linkedin,
                author.instagram,
              ].filter(Boolean),
            }),
          }}
        />
      )}


     <AuthorPage slug={slug} />;
    </>


  )
}

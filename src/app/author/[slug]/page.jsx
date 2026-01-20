import AuthorPage from "@/components/authorSection/authorProfile";
import { base_url } from "@/components/Helper/helper";

export async function generateMetadata({ params }) {
  const slug = await params.slug;
  const baseUrl = "https://dailynewzmail.com/";

  try {
    const res = await fetch(`${base_url}/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return {
        title: "Author Not Found | Daily Newz Mail",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }

    const data = await res.json();
    const author = data[0];

    if (!author) {
      return {
        title: "Author Not Found | Daily Newz Mail",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }

    const fullName = `${author.firstName} ${author.lastName}`;
    const bio =
      author.shortBio ||
      `Explore articles and insights by ${fullName} on Daily Newz Mail.`;
    const imageUrl = author.image
      ? author.image.startsWith("http")
        ? author.image
        : `${baseUrl}${author.image}`
      : `${baseUrl}/images/default-user.png`;

    return {
      title: `${fullName} | Author at Daily Newz Mail`,
      description: bio,
      keywords: [
        fullName,
        "Daily Newz Mail authors",
        "tech blog authors",
        "curated content writer",
        "insights by " + fullName,
      ],
      alternates: {
        canonical: `${baseUrl}/${slug}`,
      },
      openGraph: {
         title: `${fullName} | Author at Daily Newz Mail`,
         description: bio,
         url: `${baseUrl}/${slug}`,
        siteName: "DailyNewzMail",
        images: [
          {
            url: `${base_url}${author?.image}`, // 🔁 Replace with actual OG image URL
            width: 1200,
            height: 630,
            alt: "DailyNewzMail Hero Banner",
          },
        ],
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Author Profile | DailyNews",
      description:
        "Author information could not be loaded due to a network issue.",
      alternates: {
        canonical: `${baseUrl}${slug}`,
      },
    };
  }
}

export default function Page({ params }) {
  return <AuthorPage slug={params?.slug} />;
}

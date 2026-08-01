import HeroBanner from '../../components/HeroBanner';
import JsonLd from '../../components/JsonLd';

const BASE_URL = 'https://makeupstudio-nextjs.vercel.app';

export const metadata = {
  title: 'About Us | SISIRO Makeup Studio',
  description:
    "Meet the team behind SISIRO — Hyderabad's luxury bridal makeup studio. Years of artistry, personalised care, and a passion for making every client feel their most beautiful.",
  keywords: ['about SISIRO', 'makeup artist Hyderabad', 'luxury beauty studio', 'bridal makeup team Hyderabad'],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/about`,
    title: 'About Us | SISIRO Makeup Studio',
    description:
      "Meet the team behind SISIRO — Hyderabad's luxury bridal makeup studio. Years of artistry, personalised care, and a passion for making every client feel their most beautiful.",
    images: [{ url: '/images/About.png', width: 1200, height: 630, alt: 'About SISIRO Makeup Studio — Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | SISIRO Makeup Studio',
    description: "Meet the team behind SISIRO — Hyderabad's luxury bridal makeup studio.",
    images: ['/images/About.png'],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About SISIRO Makeup Studio',
  url: `${BASE_URL}/about`,
  description:
    "Meet the team behind SISIRO — Hyderabad's luxury bridal makeup studio. Years of artistry, personalised care, and a passion for making every client feel their most beautiful.",
  image: `${BASE_URL}/images/About.png`,
  mainEntity: {
    '@type': 'BeautySalon',
    name: 'SISIRO Makeup Studio',
    url: BASE_URL,
    image: `${BASE_URL}/images/About.png`,
    description: 'Luxury bridal makeup studio and professional beauty academy in Hyderabad.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Madhapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Dr. Preethi',
      jobTitle: 'Lead Makeup Artist & Founder',
    },
  },
};

export default function About() {
  return (
    <>
      <JsonLd schema={aboutSchema} />
      <HeroBanner
        image="/images/About.png"
        subtitle="About Us"
        title="Creating Beautiful Memories Since Day One"
        description="We provide luxury bridal makeup, beauty services and professional training with years of experience."
      />
    </>
  );
}

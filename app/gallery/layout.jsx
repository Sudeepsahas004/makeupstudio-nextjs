import JsonLd from '../../components/JsonLd';

export const metadata = {
  title: 'Makeup Gallery | SISIRO Makeup Studio',
  description:
    'Explore the SISIRO portfolio — stunning bridal, reception, engagement, celebrity, and HD makeup looks created by our expert artists in Hyderabad.',
  keywords: [
    'makeup gallery Hyderabad',
    'bridal makeup portfolio',
    'SISIRO gallery',
    'wedding makeup photos',
    'HD makeup Hyderabad',
    'celebrity makeup Hyderabad',
  ],
  alternates: {
    canonical: 'https://sisiro.co/gallery',
  },
  openGraph: {
    type: 'website',
    url: 'https://sisiro.co/gallery',
    title: 'Makeup Gallery | SISIRO Makeup Studio',
    description:
      'Explore the SISIRO portfolio — stunning bridal, reception, engagement, celebrity, and HD makeup looks created by our expert artists in Hyderabad.',
    images: [
      {
        url: '/images/Gallery/Gallery-1.png',
        width: 1200,
        height: 630,
        alt: 'SISIRO Makeup Gallery — Bridal & Special Occasion Looks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makeup Gallery | SISIRO Makeup Studio',
    description:
      'Explore stunning bridal, reception, and HD makeup looks by SISIRO in Hyderabad.',
    images: ['/images/Gallery/Gallery-1.png'],
  },
};

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'SISIRO Makeup Studio — Portfolio Gallery',
  description:
    'A curated portfolio of bridal, reception, engagement, celebrity, and HD makeup looks by SISIRO Makeup Studio in Hyderabad.',
  url: 'https://sisiro.co/gallery',
  image: [
    'https://sisiro.co/images/Gallery/Gallery-1.png',
    'https://sisiro.co/images/Gallery/Gallery-2.png',
    'https://sisiro.co/images/Gallery/Gallery-3.png',
    'https://sisiro.co/images/Gallery/Gallery-4.png',
    'https://sisiro.co/images/Gallery/Gallery-5.png',
    'https://sisiro.co/images/Bridal-Image1.jpg',
    'https://sisiro.co/images/Bridal-Image2.jpg',
    'https://sisiro.co/images/Bridal-Image3.jpg',
  ],
  author: {
    '@type': 'BeautySalon',
    name: 'SISIRO Makeup Studio',
    url: 'https://sisiro.co',
  },
};

export default function GalleryLayout({ children }) {
  return (
    <>
      <JsonLd schema={gallerySchema} />
      {children}
    </>
  );
}

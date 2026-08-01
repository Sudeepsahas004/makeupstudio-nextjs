import JsonLd from '../../components/JsonLd';

export const metadata = {
  title: 'Makeup Academy in Hyderabad | SISIRO',
  description:
    'Learn professional makeup artistry at SISIRO Academy in Hyderabad. Courses in bridal makeup, self-grooming, corporate grooming, and advanced techniques for all skill levels.',
  keywords: [
    'makeup academy Hyderabad',
    'makeup courses Hyderabad',
    'professional makeup training',
    'bridal makeup course Madhapur',
    'SISIRO academy',
    'beauty school Hyderabad',
  ],
  alternates: {
    canonical: 'https://sisiro.co/academy',
  },
  openGraph: {
    type: 'website',
    url: 'https://sisiro.co/academy',
    title: 'Makeup Academy in Hyderabad | SISIRO',
    description:
      'Learn professional makeup artistry at SISIRO Academy in Hyderabad. Courses in bridal makeup, self-grooming, corporate grooming, and advanced techniques for all skill levels.',
    images: [
      {
        url: '/images/Academy.png',
        width: 1200,
        height: 630,
        alt: 'SISIRO Makeup Academy — Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makeup Academy in Hyderabad | SISIRO',
    description:
      'Learn professional makeup artistry at SISIRO Academy in Hyderabad. Courses for all skill levels.',
    images: ['/images/Academy.png'],
  },
};

const academySchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'SISIRO Makeup Academy',
  description:
    'Professional makeup academy in Hyderabad offering courses in bridal makeup, self-grooming, corporate grooming, and advanced makeup techniques for all skill levels.',
  url: 'https://sisiro.co/academy',
  image: 'https://sisiro.co/images/Academy.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Madhapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  parentOrganization: {
    '@type': 'BeautySalon',
    name: 'SISIRO Makeup Studio',
    url: 'https://sisiro.co',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Makeup Courses',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'Self Grooming',
        description: 'Beginner-friendly self-grooming and personal makeup course.',
        provider: { '@type': 'EducationalOrganization', name: 'SISIRO Makeup Academy' },
        timeRequired: 'P2W',
        educationalLevel: 'Beginner',
        url: 'https://sisiro.co/makeup-course-in-madhapur/',
      },
      {
        '@type': 'Course',
        name: 'Corporate Grooming',
        description: 'Professional corporate grooming and presentation makeup course.',
        provider: { '@type': 'EducationalOrganization', name: 'SISIRO Makeup Academy' },
        timeRequired: 'P4W',
        educationalLevel: 'Beginner',
        url: 'https://sisiro.co/basic-hair-course-in-madhapur/',
      },
      {
        '@type': 'Course',
        name: 'Makeup Training',
        description: 'Advanced professional makeup training programme in Hyderabad.',
        provider: { '@type': 'EducationalOrganization', name: 'SISIRO Makeup Academy' },
        timeRequired: 'P8W',
        educationalLevel: 'Advanced',
        url: 'https://sisiro.co/advanced-hair-course-in-hyderabad/',
      },
    ],
  },
};

export default function AcademyLayout({ children }) {
  return (
    <>
      <JsonLd schema={academySchema} />
      {children}
    </>
  );
}

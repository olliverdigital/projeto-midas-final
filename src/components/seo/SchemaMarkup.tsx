import { Helmet } from 'react-helmet-async';

export const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Midas Locações e Serviços Ltda",
    "url": "https://midaslsltda.com.br",
    "logo": "https://midaslsltda.com.br/logo.png", // Placeholder, deve ser atualizado
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-34-99809-9418",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://instagram.com/midas_ltda",
      "https://share.google/UEJnSWlKB8lovUiPx" // Link GMN
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Midas Locações e Serviços Ltda",
    "image": "https://midaslsltda.com.br/fachada.jpg", // Placeholder
    "@id": "https://midaslsltda.com.br",
    "url": "https://midaslsltda.com.br",
    "telephone": "+55-34-99809-9418",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Endereço da Empresa", // Placeholder, o usuário deve atualizar se quiser exibir
      "addressLocality": "Uberlândia", // Assumindo baseado no DDD 34, user pode ajustar
      "addressRegion": "MG",
      "postalCode": "38400-000", // Placeholder
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -18.9100, // Coordinates placeholder
      "longitude": -48.2700
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://instagram.com/midas_ltda",
      "https://share.google/UEJnSWlKB8lovUiPx"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Manutenção e Instalação Fotovoltaica Industrial",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Midas Locações e Serviços Ltda"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Fotovoltaicos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de Usinas Fotovoltaicas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manutenção Preventiva de Equipamentos Solares"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

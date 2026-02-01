import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    image?: string;
}

export const SEOHead = ({
    title = "MIDAS Locações & Serviços | Manutenção e Instalação Fotovoltaica",
    description = "Especialistas em instalação e manutenção de usinas fotovoltaicas industriais e residenciais. Atendimento em todo o Brasil. Solicite um orçamento!",
    canonicalUrl = "https://midaslsltda.com.br",
    image = "https://midaslsltda.com.br/og-image.jpg" // Placeholder
}: SEOHeadProps) => {
    const siteTitle = title.includes("MIDAS") ? title : `${title} | MIDAS Locações & Serviços`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="MIDAS Locações & Serviços Ltda" />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

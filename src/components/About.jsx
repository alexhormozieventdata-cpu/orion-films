import TrustedClients from '../subpages/TrustedClients'
import { Helmet } from 'react-helmet-async'
import ServicesSection from '../utility/ServicesSection'
import StatsSection from '../utility/StatsSection'
import AboutSection from '../utility/AboutSection'
import HeroSlider from '../utility/HeroSlider'
import VerticalTabs from '../utility/VerticalTabs'
import WhyHireUs from '../utility/WhyHireUs'
import ContactSection from '../utility/ContactSection'
import Gallery from '../utility/Gallery'
import BlogSection from '../utility/BlogSection'
import { BeforeAfter } from '../utility/BeforeAfter'

const About = () => {
  return (
    <>
    <Helmet>
      {/* Primary SEO */}
      <title>Orion Films | Best Wedding Videography & Photography in Bihar & Jharkhand</title>
    
      <meta
        name="description"
        content="Orion Films is a professional wedding photography and cinematic videography company in Bihar & Jharkhand. We specialize in wedding films, pre-wedding shoots, candid photography, and event coverage. Book your dream wedding shoot today!"
      />
    
      <meta
        name="keywords"
        content="wedding photographer Bihar, wedding videographer Jharkhand, pre wedding shoot Bihar, cinematic wedding film India, candid photography Bihar, best wedding photographer Patna, wedding shoot Jharkhand, Orion Films"
      />
    
      {/* Open Graph (Facebook / WhatsApp) */}
      <meta property="og:title" content="Orion Films | Wedding Photography & Videography Experts" />
      
      <meta
        property="og:description"
        content="Capture your special moments with Orion Films – expert wedding photographers & cinematic videographers serving Bihar & Jharkhand."
      />
    
      <meta property="og:image" content="/logo.webp" />
      <meta property="og:type" content="website" />
    
      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Orion Films Wedding Photography" />
      <meta
        name="twitter:description"
        content="Premium wedding photography & cinematic films in Bihar & Jharkhand."
      />
      <meta name="twitter:image" content="/logo.webp" />
    
      {/* Local SEO */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Bihar, Jharkhand" />
        </Helmet>

        {/* Mian Conatant */}

      <HeroSlider/>
      
      <AboutSection/>
      <Gallery/>
      <StatsSection/>
      
      <ServicesSection/>
      <WhyHireUs/>
      {/* <ImageGridScroll/> */}
      <BeforeAfter/>
      
    <TrustedClients/>
    <BlogSection/>
    <VerticalTabs/>
    <ContactSection/>
    </>
  )
}

export default About
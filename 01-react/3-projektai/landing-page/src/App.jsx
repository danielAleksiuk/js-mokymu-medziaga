import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './data/data.json';
import { useEffect, useState } from 'react';
import Navigation from './pages/navigation/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Gallery from './pages/gallery/Gallery';
import Feedback from './pages/feedback/Feedback';
import Team from './pages/team/Team';
import Footer from './pages/footer/Footers';
import Contacts from './pages/contacts/Contacts';

function App() {
  const [landingPadeData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(jsonData);
  }, [])

  return (
    <>
      { landingPadeData && (
        <>
          <Navigation 
            title={landingPadeData.navigation.title}
            navItems={landingPadeData.navigation.navigationItems}
          />

          <Header
            title={landingPadeData.header.title}
            subtitle={landingPadeData.header.subtitle}
            buttonText={landingPadeData.header.buttonText}/>
          <Features
            title={landingPadeData.features.title}
            featuresItems={landingPadeData.features.featuresItems}
          />
          <About
            title={landingPadeData.about.title}
            description={landingPadeData.about.description}
            whyUsTitle={landingPadeData.about.whyUsTitle}
            whyUsItems={landingPadeData.about.whyUsItems}
            />
          <Services
            title={landingPadeData.services.title}
            serviceItems={landingPadeData.services.serviceItems}
          />
          <Gallery
            title={landingPadeData.gallery.title}
            description={landingPadeData.gallery.description}
            images={landingPadeData.gallery.images}
            />
          <Feedback
            title={landingPadeData.feedback.title}
            feedbacks={landingPadeData.feedback.feedbacks}
          />
          <Team
            title={landingPadeData.team.title}
            description={landingPadeData.team.description}
            members={landingPadeData.team.members}
          />
          <Contacts
            title={landingPadeData.contacts.title}
            description={landingPadeData.contacts.description}
            contactInfo={landingPadeData.contacts.contactInfo}
            socialIcons={landingPadeData.contacts.socialIcons}
          />
          <Footer
            title={landingPadeData.footer.title}
            />
        </>
      )}
    </>
  )
}
 
export default App

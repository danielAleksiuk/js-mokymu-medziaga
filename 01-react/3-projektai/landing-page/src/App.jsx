import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './data/data.json';
import { useEffect, useState } from 'react';
import Navigation from './pages/navigation/Navigation';
import Header from './pages/header/Header';

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
        </>
      )}
    </>
  )
}
 
export default App

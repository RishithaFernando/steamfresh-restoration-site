import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header';
import Footer from './components/Footer';
import MobileCallBar from './components/MobileCallBar';
import WhatsAppButton from './components/WhatsAppButton';
import CookieNotice from './components/CookieNotice';

import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceAreas from './pages/ServiceAreas';
import ServiceAreaDetail from './pages/ServiceAreaDetail';
import NotFound from './pages/NotFound';
import { servicesData } from './data/servicesData';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Home />} />

            {servicesData.map((data) => (
              <Route
                key={data.serviceId}
                path={`/${data.serviceId}`}
                element={<Service {...data} />}
              />
            ))}

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:suburb" element={<ServiceAreaDetail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <MobileCallBar />
        <WhatsAppButton />
        <CookieNotice />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./layout/MainLayout";

// ✅ ALL PAGES LAZY
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const WeddingPhotography = lazy(() => import("./subpages/WeddingPhotography"));
const PreWeddingShoots = lazy(() => import("./subpages/PreWeddingShoots"));
const CandidPhotography = lazy(() => import("./subpages/CandidPhotography"));
const CinematicFilm = lazy(() => import("./subpages/CinematicFilm"));
const EventPhotography = lazy(() => import("./subpages/EventPhotography"));
const BirthdayPhotography = lazy(() => import("./subpages/BirthdayPhotography"));

import WhatsappButton from "./subpages/WhatsappButton";
import SmoothScrollWrapper from "./utility/SmoothScrollWrapper";
import ScrollToTop from "./utility/ScrollToTop";
import BookingModal from "./subpages/BookingModal";


// ✅ Better Loader
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black text-amber-500 font-bold z-[9999]">
    <div className="animate-pulse text-lg">Loading...</div>
  </div>
);

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScrollWrapper>
          <ScrollToTop />

          {/* ✅ Modal (no suspense needed) */}
          {openModal && (
            <BookingModal onClose={() => setOpenModal(false)} />
          )}

          <Routes>
            <Route
              path="/"
              element={<MainLayout setOpenModal={setOpenModal} />}
            >
              {/* ✅ Each route wrapped separately */}
              
              <Route
                index
                element={
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                }
              />

              <Route
                path="about"
                element={
                  <Suspense fallback={<Loader />}>
                    <About />
                  </Suspense>
                }
              />

              <Route
                path="portfolio"
                element={
                  <Suspense fallback={<Loader />}>
                    <Portfolio />
                  </Suspense>
                }
              />

              <Route
                path="contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <Contact />
                  </Suspense>
                }
              />

              {/* Services */}
              <Route
                path="services/wedding"
                element={
                  <Suspense fallback={<Loader />}>
                    <WeddingPhotography />
                  </Suspense>
                }
              />

              <Route
                path="services/prewedding"
                element={
                  <Suspense fallback={<Loader />}>
                    <PreWeddingShoots />
                  </Suspense>
                }
              />

              <Route
                path="services/candid"
                element={
                  <Suspense fallback={<Loader />}>
                    <CandidPhotography />
                  </Suspense>
                }
              />

              <Route
                path="services/film"
                element={
                  <Suspense fallback={<Loader />}>
                    <CinematicFilm />
                  </Suspense>
                }
              />

              <Route
                path="services/event"
                element={
                  <Suspense fallback={<Loader />}>
                    <EventPhotography />
                  </Suspense>
                }
              />

              <Route
                path="services/birthday"
                element={
                  <Suspense fallback={<Loader />}>
                    <BirthdayPhotography />
                  </Suspense>
                }
              />
            </Route>
          </Routes>

          <WhatsappButton />
        </SmoothScrollWrapper>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
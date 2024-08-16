import React from 'react';
import Hero from './sections/Hero';
import Nav from  './components/Bav';
import PopularProducts from './sections/PopularProducts';
import SpecialOffers from './sections/SpecialOffers';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/Superquality';
import Footer from './sections/Footer';
import CustomerReviews from './sections/CustomerReviews';
import Services from './sections/Services';

function App() {
  return (
    <>
      {/* <h1>Hello Wordl</h1> */}
      <main className="relative">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Services/>
        </section>
        <section className="padding">
          <SpecialOffers/>
        </section>
        <section className="padding-t pb- px-8 bg-black flex justify-center items-center">
          <Footer/>
        </section>
      </main>
    </>
  );
}


export default App
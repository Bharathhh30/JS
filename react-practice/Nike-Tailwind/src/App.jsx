import React from 'react';
import Hero from './sections/Hero';
import Nav from  './components/Bav';
import PopularProducts from './sections/PopularProducts';
import SpecialOffers from './sections/SpecialOffers';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Footer from './sections/Footer';
import CustomerReviews from './sections/CustomerReviews';

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
          Services
        </section>
        <section className="padding">
          <SpecialOffers/>
        </section>
        <section className="padding bg-pale-blue ">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="padding-t pb- px-8 bg-black">
          <Footer/>
        </section>
      </main>
    </>
  );
}


export default App
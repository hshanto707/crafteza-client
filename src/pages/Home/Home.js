import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import './Home.css'
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <div>
      <Header />

      <Hero />

      {/* PRODUCTS */}

      <Banner />

      {/* BRANDS */}

      {/* TESTIMONIALS */}

      {/* SERVICES */}

      <Newsletter />

      {/* FOOTER */}
    </div>
  );
};

export default Home;
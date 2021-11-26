import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import './Home.css'
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import Brands from '../../components/Brands/Brands';

const Home = () => {
  return (
    <div>
      <Header />

      <Hero />

      {/* PRODUCTS */}

      <Banner />

      <Brands />

      {/* TESTIMONIALS */}

      {/* SERVICES */}

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
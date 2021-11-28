import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import './Home.css'
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import Brands from '../../components/Brands/Brands';
import Services from '../../components/Services/Services';
import Categories from '../../components/Categories/Categories';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Header />

      <Hero />

      <Categories />

      <Banner />

      <Services />

      <Brands />

      <Testimonial />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
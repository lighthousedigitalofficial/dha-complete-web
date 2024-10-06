// HomePage.jsx
import React from 'react';
import Home from '../../components/Home/Home';
import Layout from '../Pages/BannerLayout';
const HomePage = () => {
  return (
    <Layout>
      <Home /> {/* Home component content will be rendered below the banner */}
    </Layout>
  );
};

export default HomePage;

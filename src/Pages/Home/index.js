import { Layout } from 'antd';
import Hero from './sectionHero';
import About from './sectionAbout';

const Home = () => {
  return (
    <Layout.Content>
      <Hero />
      <About />
    </Layout.Content>
  );
};

export default Home;

import { Layout } from 'antd';
import Hero from './sectionHero';
import About from './sectionAbout';
import Story from './ourStory';
import WhyCurrenxi from './sectionWhyCurrenxi';

const Home = () => {
  return (
    <Layout.Content>
      <Hero />
      <About />
      <Story />
      <WhyCurrenxi />
    </Layout.Content>
  );
};

export default Home;

import { Layout } from 'antd';
import Hero from './sectionHero';
import About from './sectionAbout';
import Story from './ourStory';

const Home = () => {
  return (
    <Layout.Content>
      <Hero />
      <About />
      <Story />
    </Layout.Content>
  );
};

export default Home;

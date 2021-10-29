import { Layout } from 'antd';
import Hero from './sectionHero';
import About from './sectionAbout';
import Story from './sectionOurStory';
import WhyCurrenxi from './sectionWhyCurrenxi';
import GetStarted from './sectionGetStarted';

const Home = () => {
  return (
    <Layout.Content>
      <Hero />
      <About />
      <Story />
      <WhyCurrenxi />
      <GetStarted />
    </Layout.Content>
  );
};

export default Home;

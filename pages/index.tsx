import { Inter } from '@next/font/google';
import { GetServerSideProps, NextPage } from 'next';
import BlogComponents from '../components/BlogComponents';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import { IPost } from '../type/database.type';
import supabase from '../utils/supabaseClient';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage<{ blogPost: IPost[] }> = ({ blogPost }) => {
  return (
    <Layout>
      <HeroSection />
      <BlogComponents blogpost={blogPost} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data, error } = await supabase.from('posts').select().limit(6)
  return {
    props: {
      blogPost: data,
    },
  };
};

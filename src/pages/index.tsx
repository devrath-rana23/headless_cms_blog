import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../../components';
import { getPosts } from '../../services';

export default function Home({ posts }: any) {
  return (
    <>
      <div className='container mx-auto px-10 mb-8'>
        <Head>
          <title>CMS Blog</title>
          <link rel="shortcut icon" href="../../public/favicon.ico" type="image/x-icon" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post: any) => <PostCard post={post.node} key={post.title} />)}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//Syntax method of fetching data in next.js and we can pass it in above component simply as props
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

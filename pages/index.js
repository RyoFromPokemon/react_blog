// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home({ blog }) {
  return (
    <div>
      <h1>Onasu Blog</h1>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
              <br></br><img src={blog.image && `${blog.image.url}`}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://onasu.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
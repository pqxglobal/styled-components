import styles from '../styles/Home.module.css'

export function getStaticProps() {
  return {
    props: {
      posts: []
    }
  }
}

const Home = ({posts}) => {
  return (
    <div className={styles.container}>
      <h1>Hello chat</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export default Home

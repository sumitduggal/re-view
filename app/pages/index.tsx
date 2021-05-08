import Layout from "app/core/layouts/Layout"

const Home = () => {
  return <div>Homepage</div>
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

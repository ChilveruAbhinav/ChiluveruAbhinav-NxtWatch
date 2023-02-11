import Header from '../Header'
import ContainerMenu from '../ContainerMenu'
import TrendingContainer from '../TrendingContainer'

const Home = () => (
  <>
    <Header />
    <div className="bottom-container">
      <ContainerMenu />
      <TrendingContainer />
    </div>
  </>
)
export default Home

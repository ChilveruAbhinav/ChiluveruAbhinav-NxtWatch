import Header from '../Header'

import './index.css'
import ContainerMenu from '../ContainerMenu'
import HomeContainer from '../HomeContainer'

const Home = () => (
  <>
    <Header />
    <div className="bottom-container">
      <ContainerMenu />
      <HomeContainer />
    </div>
  </>
)
export default Home

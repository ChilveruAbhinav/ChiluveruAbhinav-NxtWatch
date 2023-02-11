import Header from '../Header'

import './index.css'
import ContainerMenu from '../ContainerMenu'
import GameContainer from '../GameContainer'

const Gaming = () => (
  <>
    <Header />
    <div className="bottom-container">
      <ContainerMenu />
      <GameContainer />
    </div>
  </>
)
export default Gaming

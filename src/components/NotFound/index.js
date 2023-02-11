import Header from '../Header'

import ContainerMenu from '../ContainerMenu'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
  BottomContainer,
} from './StyledComponent'

const NotFound = () => (
  <>
    <Header />
    <BottomContainer>
      <ContainerMenu />
      <NotFoundContainer>
        <NotFoundImg src="" />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundPara>
          We are sorry, the page you requested could not brfound
        </NotFoundPara>
      </NotFoundContainer>
    </BottomContainer>
  </>
)

export default NotFound

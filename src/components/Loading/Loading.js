import styled from 'styled-components'

import { SpinnerGap } from "@phosphor-icons/react";

const Loading = ({ size }) => {
  return (
    <Container>
      <Loader>
        <SpinnerGap size={size} />
      </Loader>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
`

const Loader = styled.div`
  > svg {
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: rotate 2s linear infinite;
    margin-top: 6px;
  }
`;

Loading.defaultProps = {
  variant: 'primary',
  size: '40px'
}

export { Loading }

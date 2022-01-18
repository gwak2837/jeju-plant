import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import Navigation from 'src/layouts/Navigation'
import { currentUser } from 'src/models/recoil'
import styled from 'styled-components'

import { Slider } from './post/create'

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  padding: 0.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    width: 6rem;
    height: 100%;
    padding: 0.5rem;
  }
`

const SliderWithoutScollBar = styled(Slider)`
  scrollbar-color: transparent transparent;
  scrollbar-width: 0px;

  ::-webkit-scrollbar {
    height: 0;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  :hover > li > *,
  :focus-within > li > * {
    animation-name: none;
  }

  @keyframes toNext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes toStart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }
`

const WhiteButton = styled.button`
  border: 1px solid #eee;
  border-radius: 5px;

  padding: 0.7rem;
`

const Snap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;

  animation-timing-function: ease;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-name: none;
  }
`

const SnapNext = styled(Snap)`
  animation-name: toNext, snap;
`

const SnapStart = styled(Snap)`
  animation-name: toStart, snap;
`

const Frame16to10 = styled.li<{ background?: string }>`
  aspect-ratio: 16 / 10;
  background: ${(p) => p.background ?? '#fff'};
  flex: 0 0 100%;
  position: relative;
`

export default function HomePage() {
  const router = useRouter()
  const { nickname } = useRecoilValue(currentUser)

  return (
    <PageHead>
      <Sticky>
        {!nickname && <WhiteButton onClick={() => router.push('/login')}>로그인</WhiteButton>}
      </Sticky>
      행복의 비밀은 사랑이다
    </PageHead>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Navigation>{page}</Navigation>
}

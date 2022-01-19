import { Popover } from 'antd'
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

const Relative = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
`

const Button = styled.button`
  position: absolute;
  z-index: 1;
  border: 1px solid black;
`

const HeadButton = styled(Button)`
  width: 5rem;
  height: 5rem;
  top: 0;
  left: 50%;
`

const NeckButton = styled(Button)`
  width: 5rem;
  height: 2rem;
  top: 5rem;
  left: 50%;
`

const ChestButton = styled(Button)`
  width: 5rem;
  height: 4rem;
  top: 7rem;
  left: 50%;
`

const ShoulderButton = styled(Button)`
  width: 2rem;
  height: 4rem;
  top: 5.5rem;
  left: 40%;
`

const Shoulder2Button = styled(Button)`
  width: 2rem;
  height: 4rem;
  top: 5.5rem;
  left: 73%;
`

export default function HomePage() {
  const router = useRouter()
  const { nickname } = useRecoilValue(currentUser)

  return (
    <PageHead>
      <Sticky>
        {!nickname && <WhiteButton onClick={() => router.push('/login')}>로그인</WhiteButton>}
      </Sticky>
      <Relative>
        <Image src="/images/body.png" alt="body" width="385" height="607" />
        <Popover
          content={
            <div>
              <div>머리에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <HeadButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>목에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <NeckButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>가슴에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <ChestButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>어깨에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <ShoulderButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>어깨에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <Shoulder2Button />
        </Popover>
      </Relative>
      <div>자생식물을 우수해요. 기존 건강기능식품에 비해 저렴한 가격에 효능을 얻을 수 있어요.</div>
    </PageHead>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Navigation>{page}</Navigation>
}

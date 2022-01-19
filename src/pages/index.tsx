import { Popover } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import Navigation from 'src/layouts/Navigation'
import { currentUser } from 'src/models/recoil'
import styled from 'styled-components'

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
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

const Relative = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
`

const Button = styled.button`
  position: absolute;
  z-index: 1;
  box-shadow: 0 0 0 1px black;
`

const HeadButton = styled(Button)`
  width: 21%;
  height: 12%;
  top: 2px;
  left: 50%;
`

const NeckButton = styled(Button)`
  width: 21%;
  height: 4%;
  top: 13%;
  left: 50%;
`

const ChestButton = styled(Button)`
  width: 21%;
  height: 12%;
  top: 18%;
  left: 50%;
`

const ShoulderButton = styled(Button)`
  width: 10%;
  height: 10%;
  top: 16%;
  left: 39%;
`

const Shoulder2Button = styled(Button)`
  width: 10%;
  height: 10%;
  top: 16%;
  left: 72%;
`

const ArmButton = styled(Button)`
  width: 20%;
  height: 18%;
  top: 27%;
  left: 29%;
`

const Arm2Button = styled(Button)`
  width: 20%;
  height: 18%;
  top: 27%;
  left: 72%;
`

const HandButton = styled(Button)`
  width: 13%;
  height: 10%;
  top: 46%;
  left: 23%;
`

const Hand2Button = styled(Button)`
  width: 13%;
  height: 10%;
  top: 46%;
  left: 85%;
`

const AbdomenButton = styled(Button)`
  width: 21%;
  height: 14%;
  top: 31%;
  left: 50%;
`

const ThighButton = styled(Button)`
  width: 16%;
  height: 20%;
  top: 46%;
  left: 44%;
`

const Thigh2Button = styled(Button)`
  width: 16%;
  height: 20%;
  top: 46%;
  left: 62%;
`

export default function HomePage() {
  const router = useRouter()
  const { nickname } = useRecoilValue(currentUser)

  return (
    <PageHead>
      <Sticky>
        <div>제주식물</div>
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
        <Popover
          content={
            <div>
              <div>팔에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <ArmButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>팔에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <Arm2Button />
        </Popover>

        <Popover
          content={
            <div>
              <div>손에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <HandButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>손에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <Hand2Button />
        </Popover>
        <Popover
          content={
            <div>
              <div>배에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <AbdomenButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>허벅지에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <ThighButton />
        </Popover>
        <Popover
          content={
            <div>
              <div>허벅지에 좋은 자생식물</div>
              <ol>
                <div>자생식물1</div>
                <div>자생식물2</div>
                <div>자생식물3</div>
              </ol>
            </div>
          }
          trigger="click"
        >
          <Thigh2Button />
        </Popover>
      </Relative>
      <div>자생식물은 우수해요. 기존 건강기능식품에 비해 저렴한 가격에 효능을 얻을 수 있어요.</div>
    </PageHead>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Navigation>{page}</Navigation>
}

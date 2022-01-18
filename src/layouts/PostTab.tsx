import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { PRIMARY_ACHROMATIC_COLOR, PRIMARY_COLOR } from 'src/models/constants'
import styled from 'styled-components'

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;

  background: #fff;
  border-bottom: 1px solid #eee;
`

const A = styled.a<{ selected: boolean }>`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 2.25rem;
  padding: 2rem 0 0.75rem;

  border-bottom: ${(p) => (p.selected ? `3px solid ${PRIMARY_COLOR}` : '3px solid #fff')};
  color: ${(p) => (p.selected ? PRIMARY_COLOR : PRIMARY_ACHROMATIC_COLOR)};
  transition: all 0.3s ease-out;

  :hover {
    color: ${PRIMARY_COLOR};
  }
`

type Props = {
  children: ReactNode
}

export default function PostTab({ children }: Props) {
  const { asPath } = useRouter()

  const isFeedSelected = asPath === '/post'
  const isGroupSelected = asPath === '/group'

  return (
    <>
      <Sticky>
        <Link href="/post" passHref>
          <A selected={isFeedSelected}>피드</A>
        </Link>
        <Link href="/group" passHref>
          <A selected={isGroupSelected}>그룹</A>
        </Link>
      </Sticky>
      {children}
    </>
  )
}

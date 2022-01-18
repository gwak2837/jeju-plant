import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import { toast } from 'react-toastify'
import { toastApolloError } from 'src/apollo/error'
import PageHead from 'src/components/PageHead'
import PostCard, { PostLoadingCard } from 'src/components/PostCard'
import { Post, usePostsQuery } from 'src/graphql/generated/types-and-hooks'
import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
import Navigation from 'src/layouts/Navigation'
import PostTab from 'src/layouts/PostTab'
import {
  NAVIGATION_HEIGHT,
  PRIMARY_COLOR,
  PRIMARY_GREY_COLOR,
  TABLET_MIN_WIDTH,
} from 'src/models/constants'
import WriteIcon from 'src/svgs/write-icon.svg'
import styled from 'styled-components'

import { FetchedAllData } from '../zoom/index'

export const PrimaryH3 = styled.h3`
  color: ${PRIMARY_COLOR};
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.5rem;
`

const GridContainerPost = styled.ul`
  display: grid;
  gap: 0.9rem;
  padding: 0.6rem;

  background: #fff;
`

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${(p) => (p.disabled ? PRIMARY_GREY_COLOR : PRIMARY_COLOR)};
  box-shadow: 0px 4px 20px rgba(16, 16, 16, 0.25);
  border-radius: 99px;
  color: #fff;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`

const FixedButton = styled(PrimaryButton)`
  position: fixed;
  bottom: ${NAVIGATION_HEIGHT};
  right: 50%;
  transform: translateX(50vw);

  margin: 1.25rem;
  padding: 0.7rem 1.2rem;

  @media (min-width: ${TABLET_MIN_WIDTH}) {
    transform: translateX(230%);
  }
`

const limit = 10
const description = ''

export default function PostsPage() {
  const [hasMoreData, setHasMoreData] = useState(true)
  const router = useRouter()

  // 데이터 요청
  const { data, loading, fetchMore } = usePostsQuery({
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      toastApolloError(error)
      setHasMoreData(false)
    },
    skip: !limit,
    variables: {
      pagination: { limit },
    },
  })

  const posts = data?.posts

  // 무한 스크롤
  const infiniteScrollRef = useInfiniteScroll({
    hasMoreData,
    onIntersecting: async () => {
      if (posts && posts.length > 0) {
        const lastPost = posts[posts.length - 1]
        const response = await fetchMore({
          variables: {
            pagination: {
              lastId: lastPost.id,
              limit,
            },
          },
        }).catch(() => setHasMoreData(false))

        if (response?.data.posts?.length !== limit) setHasMoreData(false)
      }
    },
  })

  function goToPostCreationPage() {
    if (window.sessionStorage.getItem('jwt') || window.localStorage.getItem('jwt')) {
      router.push('/post/create')
    } else {
      toast.info('로그인이 필요합니다')
      sessionStorage.setItem('redirectionUrlAfterLogin', '/post/create')
      router.push('/login')
    }
  }

  return (
    <PageHead title="피드 - 알파카살롱" description={description}>
      <GridContainerPost>
        {posts
          ? posts.map((post, i) => <PostCard key={i} post={post as Post} />)
          : !loading && <div>최신 이야기가 없어요</div>}
        {loading && (
          <>
            <PostLoadingCard />
            <PostLoadingCard />
          </>
        )}
      </GridContainerPost>
      {!loading && hasMoreData && <div ref={infiniteScrollRef}>무한 스크롤</div>}
      {!hasMoreData && <FetchedAllData>모든 게시글을 불러왔어요</FetchedAllData>}

      <FixedButton onClick={goToPostCreationPage}>
        <WriteIcon />
        글쓰기
      </FixedButton>
    </PageHead>
  )
}

PostsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Navigation>
      <PostTab>{page}</PostTab>
    </Navigation>
  )
}

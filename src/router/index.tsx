import { createBrowserRouter } from 'react-router-dom'
import lazyLoadRoutes from '@/components/LazyLoadRoutes'
import { AppWrapper } from '@/container/AppWrapper'

const router = createBrowserRouter([
  {
    path: '/',
    // 重定向
    element: <AppWrapper />,
    children: [
      {
        path: '',
        element: lazyLoadRoutes(() => import('@/views/Donate/Donate')),
        // router meta
        handle: {
          name: 'donate',
        },
      },
      {
        path: '/donateDetail',
        element: lazyLoadRoutes(() => import('@/views/Donate/DonateDetail')),
        // router meta
        handle: {
          name: 'donateDetail',
        },
      },
      {
        path: '/submitDonate',
        element: lazyLoadRoutes(() => import('@/views/SubmitDonate/SubmitDonate')),
        // router meta
        handle: {
          name: 'submitDonate',
        },
      },
      {
        path: '/vote',
        element: lazyLoadRoutes(() => import('@/views/Vote/Vote')),
        // router meta
        handle: {
          name: 'vote',
        },
      },
      {
        path: '/voteDetail',
        element: lazyLoadRoutes(() => import('@/views/Vote/VoteDetail')),
        // router meta
        handle: {
          name: 'voteDetail',
        },
      },
      {
        path: '/profile',
        element: lazyLoadRoutes(() => import('@/views/Profile/Profile')),
        // router meta
        handle: {
          name: 'profile',
        },
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
])

export default router

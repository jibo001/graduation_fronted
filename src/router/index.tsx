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
        path: '/myDonate',
        element: lazyLoadRoutes(() => import('@/views/Donate/MyDonate')),
        // router meta
        handle: {
          name: 'myDonate',
        },
      },
      {
        path: '/joinDonate',
        element: lazyLoadRoutes(() => import('@/views/Donate/JoinDonate')),
        // router meta
        handle: {
          name: 'joinDonate',
        },
      },
      {
        path: '/createDonate',
        element: lazyLoadRoutes(() => import('@/views/CreateDonate/CreateDonate')),
        // router meta
        handle: {
          name: 'createDonate',
        },
      },
      {
        path: '/myAudit',
        element: lazyLoadRoutes(() => import('@/views/Audit/MyAudit')),
        // router meta
        handle: {
          name: 'myAudit',
        },
      },
      {
        path: '/auditDetail',
        element: lazyLoadRoutes(() => import('@/views/Audit/AuditDetail')),
        // router meta
        handle: {
          name: 'auditDetail',
        },
      },
      {
        path: '/donateVisit',
        element: lazyLoadRoutes(() => import('@/views/Donate/DonateVisit')),
        // router meta
        handle: {
          name: 'donateVisit',
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
        path: '/chat',
        element: lazyLoadRoutes(() => import('@/views/Chat/Chat')),
        // router meta
        handle: {
          name: 'chat',
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
        path: '/myVote',
        element: lazyLoadRoutes(() => import('@/views/Vote/MyVote')),
        // router meta
        handle: {
          name: 'myVote',
        },
      },
      {
        path: '/users',
        element: lazyLoadRoutes(() => import('@/views/Users/Users')),
        // router meta
        handle: {
          name: 'users',
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
        path: '/dataPanel',
        element: lazyLoadRoutes(() => import('@/views/DataPanel/DataPanel')),
        // router meta
        handle: {
          name: 'dataPanel',
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

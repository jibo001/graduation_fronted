import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import useLocal from '@/hooks/useLocal'
import Header from '@/components/Header'
import RegisterPop from '@/components/RegisterPop'
import BottomBar from '@/components/BottomBar'
import SuspenseLoading from '@/components/SuspenseLoading'
import useRegister from '@/hooks/useRegister'

export const AppWrapper: React.FC<React.PropsWithChildren> = () => {
  // 双语
  useLocal()

  const { isRegister, register, loading } = useRegister()

  return (
    <>
      <ToastContainer />
      <Header />
      <RegisterPop isRegister={isRegister} register={register} loading={loading} />
      <Suspense fallback={<SuspenseLoading />}>
        <div className="px-3.5 py-5 pt-[65px]">
          <Outlet />
        </div>
      </Suspense>
      <BottomBar />
    </>
  )
}

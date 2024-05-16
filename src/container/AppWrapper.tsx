import { ToastContainer } from 'react-toastify'
import { Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import useLocal from '@/hooks/useLocal'
import Header from '@/components/Header'
import RegisterPop from '@/components/RegisterPop'
import BottomBar from '@/components/BottomBar'
// import SuspenseLoading from '@/components/SuspenseLoading'
import useRegister from '@/hooks/useRegister'
import SuspenseLoading from '@/components/SuspenseLoading'

export const AppWrapper: React.FC<React.PropsWithChildren> = () => {
  // 双语
  useLocal()

  const location = useLocation()

  const { isRegister, register, loading } = useRegister()

  const DATA_PANEL_PATH = '/dataPanel'

  const isDataPanel = location.pathname === DATA_PANEL_PATH
  return (
    <div
      className={
        !isDataPanel &&
        ' pb-[65px] bg-[#eff3f7] xl:min-h-[80vh]  xl:shadow-2xl xl:top-[50%] xl:-translate-y-[50%] xl:rounded-xl xl:w-[500px] xl:absolute  xl:left-[50%] xl:-translate-x-[50%]'
      }
    >
      <ToastContainer />
      {!isDataPanel && <Header />}
      {!isDataPanel && <RegisterPop isRegister={isRegister} register={register} loading={loading} />}
      <Suspense>
        <div className="px-3.5 py-5 pt-[65px] pb-[80px]  xl:h-[80vh] overflow-scroll">
          <Outlet />
        </div>
      </Suspense>
      {!isDataPanel && <BottomBar />}
    </div>
  )
}

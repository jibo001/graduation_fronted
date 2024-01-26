import { SpinLoading } from 'antd-mobile'

const SuspenseLoading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <SpinLoading
        className="text-theme-primary"
        style={{
          '--color': '#000',
          '--size': '40px',
        }}
      />
    </div>
  )
}

export default SuspenseLoading

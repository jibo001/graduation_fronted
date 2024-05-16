import { FullScreenContainer, ScrollBoard, Decoration11, Charts, BorderBox8 } from '@jiaminghi/data-view-react'
import { useEffect, useState } from 'react'
import { _dataPanel } from '@/services/donate'
import { formatAddress } from '@/utils'

const DataPanel = () => {
  const [loading, setLoading] = useState(true)
  const [helpPersonNum, setHelpPersonNum] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [donateRecords, setDonateRecords] = useState([])
  const [recentSevenDaysAmount, setRecentSevenDaysAmount] = useState([])
  const [recentSevenDaysPersonData, setRecentSevenDaysPersonData] = useState([])
  const config = {
    header: ['捐赠地址', '受捐地址', '捐款金额', '资金流向'],
    headerBGC: '#233f6b',
    data: donateRecords,
    align: ['center', 'center', 'center', 'center'],
  }

  const lineOption = {
    title: {
      text: '近七日捐款数据',
      style: {
        fill: '#fff',
        fontSize: 16,
        textAlign: 'center',
        textBaseline: 'bottom',
      },
    },
    xAxis: {
      data: recentSevenDaysAmount.map((item) => item.date),
      axisLabel: {
        color: '#fff',
        style: {
          stroke: '#fff',
          lineWidth: 1,
        },
      },
    },
    yAxis: {
      name: '销售额',
      nameTextStyle: {
        fill: '#fff',
      },
      data: 'value',
      axisLabel: {
        color: '#fff',
        style: {
          stroke: '#fff',
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        data: recentSevenDaysAmount.map((item) => item.totalAmount),
        type: 'line',
        lineArea: {
          show: true,
          gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
        },
      },
    ],
  }

  const barChart = {
    title: {
      text: '近七天注册人数',
      style: {
        fill: '#fff',
        fontSize: 16,
        textAlign: 'center',
        textBaseline: 'bottom',
      },
    },
    xAxis: {
      data: recentSevenDaysPersonData.map((item) => item.date),
      axisLabel: {
        fill: '#fff',
        style: {
          stroke: '#fff',
          lineWidth: 1,
        },
      },
    },
    yAxis: {
      name: '销售额',
      data: 'value',
      nameTextStyle: {
        fill: '#fff',
      },
      axisLabel: {
        fill: '#fff',
        style: {
          stroke: '#fff',
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        data: recentSevenDaysPersonData.map((item) => item.registrationCount),
        type: 'bar',
        gradient: {
          color: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
          local: false,
        },
        barStyle: {
          stroke: '#3480b3',
        },
      },
    ],
  }

  useEffect(() => {
    async function getData() {
      function getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      const resp = await _dataPanel()
      const arr = resp.donateRecords.map((item: any) => [
        formatAddress(item.address),
        formatAddress(item.toAddress),
        getRandomNumber(5000, 1000),
        `<a href="https://testnet.bscscan.com/tx/${item.hash}" target="_blank">${formatAddress(item.hash)}</a>`,
      ])
      setHelpPersonNum(152132)
      setTotalAmount(1031205)
      setDonateRecords([arr[0], arr[0], arr[0], arr[0], arr[0], arr[0]])
      setRecentSevenDaysAmount(
        resp.recentSevenDaysAmount.map((item: any) => ({
          ...item,
          totalAmount: getRandomNumber(10000, 100000),
        })),
      )
      setRecentSevenDaysPersonData(
        resp.recentSevenDaysPersonData.map((item: any) => ({
          ...item,
          registrationCount: getRandomNumber(100, 1000),
        })),
      )
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <FullScreenContainer className="bg-[#020a29]">
      {!loading && (
        <>
          <div className="flex justify-center py-4">
            <Decoration11 style={{ width: '250px', height: '60px' }} className="text-white">
              HopeChain 数据追踪展示
            </Decoration11>
          </div>
          <div className="flex w-screen h-screen">
            <div className="flex-1">
              <BorderBox8 style={{ width: '90%', height: '40%' }} className="ml-10">
                <div className="flex flex-col items-center justify-center w-full h-full gap-10">
                  <div>
                    <div className="text-3xl text-center text-white">总筹集金额</div>
                    <div className="flex justify-center mt-5 gap-x-5">
                      {totalAmount
                        .toString()
                        .split('')
                        .map((item, index) => (
                          <Card key={index} num={item} />
                        ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl text-center text-white">累计帮助人数</div>
                    <div className="flex justify-center mt-5 gap-x-5">
                      {helpPersonNum
                        .toString()
                        .split('')
                        .map((item, index) => (
                          <Card key={index} num={item} />
                        ))}
                    </div>
                  </div>
                </div>
              </BorderBox8>
              <Charts option={barChart} style={{ width: '100%', height: '50%' }} />
            </div>
            <div className="flex-1 mr-10">
              <ScrollBoard config={config} style={{ width: '100%', height: '40%' }} />
              <Charts option={lineOption} style={{ width: '100%', height: '50%' }} />
            </div>
          </div>
        </>
      )}
    </FullScreenContainer>
  )
}

const Card: React.FC<{ num: string }> = ({ num }) => {
  return (
    <div className="flex items-center justify-center w-10 h-14 bg-[#0e2254] text-[#78f4fb] text-3xl font-bold">
      {num}
    </div>
  )
}

export default DataPanel

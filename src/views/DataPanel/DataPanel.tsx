import { FullScreenContainer, ScrollBoard, Decoration11, Charts, BorderBox8 } from '@jiaminghi/data-view-react'

const DataPanel = () => {
  const config = {
    header: ['列1', '列2', '列3'],
    headerBGC: '#233f6b',
    data: [
      ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
      ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
      ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
      ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
      ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
      ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
      ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
      ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
      ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
      ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3'],
    ],
    align: ['center', 'center', 'center'],
  }

  const lineOption = {
    title: {
      text: '月捐款数据',
      style: {
        fill: '#fff',
        fontSize: 16,
        textAlign: 'center',
        textBaseline: 'bottom',
      },
    },
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
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
      text: '周销售额趋势',
      style: {
        fill: '#fff',
        fontSize: 16,
        textAlign: 'center',
        textBaseline: 'bottom',
      },
    },
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
        data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
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

  return (
    <FullScreenContainer className="bg-[#020a29]">
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
                  {'123456'.split('').map((item, index) => (
                    <Card key={index} num={item} />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-3xl text-center text-white">累计帮助人数</div>
                <div className="flex justify-center mt-5 gap-x-5">
                  {'123456'.split('').map((item, index) => (
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

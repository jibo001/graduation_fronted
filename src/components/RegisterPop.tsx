import { Button, Form, Input, Popup, Radio, Space } from 'antd-mobile'
import React from 'react'
import { useAccount } from 'wagmi'
import { RegisterParams } from '@/types/donate'

type Props = {
  isRegister: boolean
  register: (registerData: RegisterParams) => Promise<void>
  loading: boolean
}

const sexOptions = [
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 0,
  },
]

const RegisterPop: React.FC<Props> = ({ isRegister, register, loading }) => {
  const { isConnected } = useAccount()

  const submit = (values: RegisterParams) => {
    register(values)
  }
  return (
    <Popup visible={isConnected && !isRegister} forceRender bodyClassName="bg-transparent flex justify-center">
      <div className="pt-3 bg-white rounded-t-xl xl:w-[500px]">
        <div className="mt-5 text-center text-orange-500">注册方可开启所有功能</div>
        <Form
          onFinish={submit}
          footer={
            <Button block type="submit" className="text-white bg-black rounded-xl" loading={loading}>
              <span className="text-sm">提交</span>
            </Button>
          }
        >
          <Form.Item name="name" label="姓名">
            <Input placeholder="请输入姓名" className="border border-solid border-[#e3e3e3] p-1 rounded-md" />
          </Form.Item>
          <Form.Item name="idCard" label="身份证号">
            <Input placeholder="请输入身份证号" className="border border-solid border-[#e3e3e3] p-1 rounded-md" />
          </Form.Item>
          <Form.Item name="birthYear" label="出生年份">
            <Input
              placeholder="请输入出生年份"
              type="number"
              className="border border-solid border-[#e3e3e3] p-1 rounded-md"
            />
          </Form.Item>
          <Form.Item name="sex" label="性别">
            <Radio.Group defaultValue="1">
              <Space>
                {sexOptions.map((option) => (
                  <Radio
                    key={option.value}
                    value={option.value}
                    style={{
                      '--icon-size': '18px',
                      '--font-size': '14px',
                      '--gap': '6px',
                    }}
                  >
                    {option.label}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
    </Popup>
  )
}

export default RegisterPop

import { Button, Form, Input, Popup, Radio, Space } from 'antd-mobile'
import React from 'react'
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
  const submit = (values: RegisterParams) => {
    register(values)
  }
  return (
    <Popup visible={!isRegister} forceRender>
      <div className="pt-3 bg-white rounded-t-xl">
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
          <Form.Item name="age" label="年龄">
            <Input
              placeholder="请输入年龄"
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

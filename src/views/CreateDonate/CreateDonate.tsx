import { Button, Form, ImageUploadItem, ImageUploader, Input, TextArea } from 'antd-mobile'
import axios from 'axios'
import { useState } from 'react'
import { env } from '@/config/env'
import useCreateDonate from '../Donate/hooks/useCreateDonate'
import { DonateParams } from '@/types/donate'

const CreateDonate = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([])
  const { crateDonate, loading } = useCreateDonate()

  const submit = async (values: DonateParams) => {
    const images = fileList.map((item) => item.url).join(',')
    await crateDonate({ ...values, images })
  }
  const upload = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const metadata = JSON.stringify({
      name: 'File name',
    })
    formData.append('pinataMetadata', metadata)
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options)
    try {
      const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': `multipart/form-data;`,
          Authorization: `Bearer ${env.pinataApiKey}`,
        },
      })
      return {
        url: `https://green-characteristic-emu-747.mypinata.cloud/ipfs/${res.data.IpfsHash}`,
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return (
    <div className="bg-white min-h-[75vh] rounded-xl">
      <Form
        onFinish={submit}
        footer={
          <Button block type="submit" className="text-white bg-black rounded-xl" loading={loading}>
            <span className="text-sm">提交</span>
          </Button>
        }
      >
        <Form.Item name="title" label="标题" rules={[{ required: true, message: '标题不能为空' }]}>
          <Input placeholder="请输入标题" className="border border-solid border-[#e3e3e3] p-1 rounded-md" />
        </Form.Item>
        <Form.Item name="sickName" label="所患疾病" rules={[{ required: true, message: '所患疾病不能为空' }]}>
          <Input placeholder="请输入所患疾病" className="border border-solid border-[#e3e3e3] p-1 rounded-md" />
        </Form.Item>
        <Form.Item name="detail" label="详情" rules={[{ required: true, message: '身份证号不能为空' }]}>
          <TextArea
            className="border border-solid border-[#e3e3e3] p-1 rounded-md"
            placeholder="请输入详情"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item name="targetAmount" label="筹款金额" rules={[{ required: true, message: '筹款金额不能为空' }]}>
          <Input
            placeholder="请输入筹款金额"
            type="number"
            className="border border-solid border-[#e3e3e3] p-1 rounded-md"
          />
        </Form.Item>
        <Form.Item name="images" label="相关图片" rules={[{ required: true, message: '相关图片不能为空' }]}>
          <ImageUploader value={fileList} onChange={setFileList} upload={upload} maxCount={9} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateDonate

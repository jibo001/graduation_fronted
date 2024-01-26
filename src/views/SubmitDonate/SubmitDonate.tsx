import { Button, Form, ImageUploadItem, ImageUploader, Input, TextArea } from 'antd-mobile'
import { useState } from 'react'

const SubmitDonate = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([])
  const mockUpload = async (file: File) => {}
  return (
    <div className="bg-white min-h-[75vh] rounded-xl">
      <Form
        footer={
          <Button block type="submit" className="text-white bg-black rounded-xl">
            <span className="text-sm">提交</span>
          </Button>
        }
      >
        <Form.Item name="title" rules={[{ required: true, message: '标题不能为空' }]}>
          <div className="mb-2 text-sm">标题</div>
          <Input placeholder="请输入标题" className="border border-solid border-[#e3e3e3] p-1 rounded-md" />
        </Form.Item>
        <Form.Item name="sickName" rules={[{ required: true, message: '所患疾病不能为空' }]}>
          <div className="mb-2 text-sm">所患疾病</div>
          <Input placeholder="请输入所患疾病" className="border border-solid border-[#e3e3e3] p-1 rounded-md" />
        </Form.Item>
        <Form.Item name="detail" rules={[{ required: true, message: '身份证号不能为空' }]}>
          <div className="mb-2 text-sm">详情</div>
          <TextArea
            className="border border-solid border-[#e3e3e3] p-1 rounded-md"
            placeholder="请输入详情"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item name="targetAmount" rules={[{ required: true, message: '筹款金额不能为空' }]}>
          <div className="mb-2 text-sm">筹款金额($)</div>
          <Input
            placeholder="请输入筹款金额"
            type="number"
            className="border border-solid border-[#e3e3e3] p-1 rounded-md"
          />
        </Form.Item>
        <Form.Item name="images" rules={[{ required: true, message: '相关图片不能为空' }]}>
          <div className="mb-2 text-sm">相关图片</div>
          <ImageUploader value={fileList} onChange={setFileList} upload={mockUpload} maxCount={9} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default SubmitDonate

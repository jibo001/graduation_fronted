import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageUploadItem, ImageUploader } from 'antd-mobile'
import axios from 'axios'
import useDonateDetail from './hooks/useDonateDetail'
import { DonateDetailHeader } from './DonateDetail'
import { env } from '@/config/env'

const DonateVisit = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([])

  const [params] = useSearchParams()
  const id = params.get('id')
  const { detail, isLoading } = useDonateDetail(id)

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
    <div>
      <DonateDetailHeader detail={detail} isLoading={isLoading} />
      <div className="px-3 py-3 mt-3 bg-white rounded-xl">
        <div className="pb-3 text-lg">凭证上传</div>
        <ImageUploader value={fileList} onChange={setFileList} upload={upload} maxCount={9} />
      </div>
    </div>
  )
}

export default DonateVisit

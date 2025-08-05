import { z } from 'zod'

interface PutBucketOptions {
  bucketName:string
  regionId:string
  storageClass?: 'Standard' | 'IA' | 'Archive' | 'ColdArchive'
  dataRedundancyType?:'LRS' | 'ZRS'
  xOssAcl?:'private' | 'public-read' | 'public-read-write'
  xOssResourceGroupId?:string
  xOssBucketTagging?:string
}

const config = {
  title:'',
  description:'',
  inputSchema:{

  }
}

putBucket.config = config

export async function putBucket(options: PutBucketOptions) {
  const {
    bucketName,
    regionId,
    storageClass = 'Standard',
    dataRedundancyType = 'LRS',
    xOssAcl = 'private',
    xOssResourceGroupId,
    xOssBucketTagging 
  } = options

  const endpoint = `https://${bucketName}.oss-${regionId}.aliyuncs.com`

  const headers = {
    'x-oss-acl': xOssAcl,
    'authorization':''
  }

  xOssResourceGroupId && (headers['x-oss-resource-group-id'] = xOssResourceGroupId)
  xOssBucketTagging && (headers['x-oss-bucket-tagging'] = xOssBucketTagging)

  const body = `
  <?xml version="1.0" encoding="UTF-8"?>
  <CreateBucketConfiguration>
    <StorageClass>${storageClass}</StorageClass>
    <DataRedundancyType>${dataRedundancyType}</DataRedundancyType>
  </CreateBucketConfiguration>
  `

  const response = await fetch(endpoint, { method:'put', headers, body })
  const result = await response.text()

  console.log(result)

  return {

  }
}

putBucket({
  bucketName:'yaxingson',
  regionId:'cn-beijing'
})

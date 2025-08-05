const config = {
  title:'',
  description:'',
  inputSchema:{

  }
}

deleteBucket.config = config

export async function deleteBucket(bucketName:string, regionId:string) {
  const endpoint = `${bucketName}.oss-${regionId}.aliyuncs.com`

  const response = await fetch(endpoint)
  const result = await response.json()

  return {
    
  }
}


import { McpServer } from '@modelcontextprotocol/sdk/server/mcp'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio'
import {
  putBucket,
  deleteBucket,

} from './tools/oss'

const server = new McpServer({
  name:'',
  version:''
})

const tools = [
  putBucket,
  deleteBucket,
]

tools.forEach(tool => server.registerTool(tool.name, tool.config, tool as any))

async function bootstrap() {
  const transport = new StdioServerTransport()
  try {
    await server.connect(transport)
  } catch(e) {
    console.error(e)
  }
}

bootstrap()


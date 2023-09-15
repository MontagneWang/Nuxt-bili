// get /api/channel
import channel from '~/database/channel'

export default defineEventHandler(()=>{
	return channel
})
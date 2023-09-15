// get /api/video/:bvid
import video from '@/database/video'

export default defineEventHandler(e => {
  const { bvid } = e.context.params || {}
  return video.find(v => v.bvid === bvid)
})
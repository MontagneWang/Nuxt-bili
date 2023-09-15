<script setup lang="ts">
import { VideoItem } from "~/types/video";

const { params } = useRoute();
const { data: detail } = await useFetch(`/api/video/${params.bvid}`);
const {
  // @ts-ignore
  data: { cid },
} = await useFetch(
  `https://api.bilibili.com/x/web-interface/view?bvid=${params.bvid}`
);

// SEO 优化
useSeoMeta({
  title: `${detail.value?.title}_哔哩哔哩bilibili_${detail.value?.author.name}`,
});

// 拼接视频链接
let videoLink = `//player.bilibili.com/player.html?aid=
    ${detail.value?.aid}&bvid=${detail.value?.bvid}&cid=${cid}
    &page=1&high_quality=1&danmaku=1&autoplay=0`;
let videoHeight = ref(200);
onMounted(() => {
  videoHeight.value = (window.innerWidth * 9) / 16;
});

// @ts-ignore
const { data: videoList }: { videoList: VideoItem[] } = await useFetch(
  "/api/video"
);

function getRandomElements(arr: any[], count: number): any[] {
  const randomElements: any[] = [];
  const copyArr = Array.from(arr); // 创建原始数组的副本

  // 随机选取元素
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * copyArr.length);
    randomElements.push(copyArr[randomIndex]);
    copyArr.splice(randomIndex, 1);
  }

  return randomElements;
}

let randomList: VideoItem[] = getRandomElements(videoList.value, 20);
</script>

<template>
  <!-- 头部 -->
  <TheHeader />
  <iframe
    :src="videoLink"
    allowFullScreen="allowfullscreen"
    width="100%"
    :height="videoHeight"
    scrolling="no"
    frameborder="0"
    loading="lazy"
  ></iframe>
  <!-- 标题作者信息 -->
  <div class="info">
    <h1 class="title-text">{{ detail?.title }}</h1>
    <div class="body">
      <div class="author">
        <img class="avatar" :src="detail?.author.face" />
        <span class="name">{{ detail?.author.name }}</span>
      </div>
    </div>
  </div>
  <!-- 相关推荐 -->
  <div class="relate">
    <h3 class="relate-title">相关推荐</h3>
    <div class="relate-list">
      <EachVideo v-for="item in randomList" :key="item.aid" :item="item" />
    </div>
    <div class="foot-tips">- 下载 App 查看更多视频 -</div>
    <van-back-top class="custom"></van-back-top>
  </div>
</template>

<style lang="scss" scoped>
.video-play {
  width: 100vw;
  height: auto;
  object-fit: contain;
  background-color: #fff;
}

.info {
  padding: 10px;
  border-bottom: 1px solid #eee;
  .title-text {
    font-size: 16px;
    font-weight: normal;
  }

  .body {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
  }

  .author {
    display: flex;
    align-items: center;
    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    .name {
      margin-left: 10px;
      font-size: 14px;
    }
  }
}

.relate {
  .relate-title {
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
    padding: 0 10px;
    color: #333;
  }
  .relate-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
  }

  .foot-tips {
    text-align: center;
    color: #ccc;
    font-size: 14px;
    margin-bottom: 3vh;
  }
}
</style>

<script setup lang="ts">
import type { VideoItem } from "@/types/video";

/**
 * test
 */
const { data: channelList } = await useFetch("/api/channel");
// TODO test

onMounted(() => {});

const { data: videoList } = await useFetch("/api/video");

const list = ref<VideoItem[]>([]); // 视频渲染数组
const loading = ref(false); // 判断加载状态，true 为正在加载
const finished = ref(false); // 是否加载完成

// 页码 和 页容量
let page = 1;
let pageSize = 20;

/**
 * 滚动触底函数
 * 根据页码提取数据并追加到 视频渲染数组
 */
const onLoad = () => {
  loading.value = false; // 正在加载
  const data = videoList.value?.slice(
    (page - 1) * pageSize,
    page * pageSize
  ) as VideoItem[];
  list.value.push(...data);
  page++;
  // 读取完毕结束加载
  if (videoList.value?.length === list.value.length) {
    finished.value = true;
  }
};
onLoad(); // 首屏渲染初始化，便于 SEO
</script>

<template>
  <!-- 头部 -->
  <TheHeader />
  <!-- 频道分区 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="下载 App 查看更多视频"
    @load="onLoad"
  >
    <div class="video-list">
      <EachVideo v-for="item in list" :key="item.bvid" :item="item" />
    </div>
  </van-list>
  <van-back-top class="custom"></van-back-top>
</template>

<style lang="scss" scoped>
// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>

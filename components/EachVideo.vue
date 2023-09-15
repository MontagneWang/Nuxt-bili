<script lang="ts" setup>

defineProps<{
  item: object
}>()
</script>

<template>
  <NuxtLink class="v-card">
    <div class="card">
      <div class="card-img">
        <img class="pic" :src="item.pic" :alt="item.title" />
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          {{ item.stat.view }}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          {{ item.stat.danmaku }}
        </span>
      </div>
    </div>
    <p class="title">{{ item.title }}</p>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>

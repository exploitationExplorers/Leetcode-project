---
layout: home

hero:
  text: "Leetcode算法"
  tagline: Leetcode 刷题日记
  actions:
    - theme: brand
      text: 开始学习
      link: /easy/141. 环形链表
features:
  - title: 内容全面
    details: 帮助您掌握算法的具体使用技巧
  - title: 优雅进阶
    details: Case 从简单到复杂逐步深入，帮助您进阶掌握
  - title: 深入浅出
    details: 拥有完整的解题思路及常见通用问题的总结
---


<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'
import pkg from '../package.json'

const dependencies = pkg.dependencies
const devDependencies = pkg.devDependencies
function getVersion (target: string): string {
  for (let name of Object.keys(dependencies)) {
    if (name === target) {
      return dependencies[name].replace('^', '')
    }
  }
  for (let name of Object.keys(devDependencies)) {
    if (name === target) {
      return devDependencies[name].replace('^', '')
    }
  }
  return ''
}
function fetchDesc () {
  const featureDetails: any = document.querySelector('div.VPFeatures.VPHomeFeatures > div.container > div.items :first-child > div.VPLink.no-icon.VPFeature .box > p.details')
  const developDesc = `采用 Vue@${getVersion('vue')} + TypeScript@${getVersion('typescript')} + Vite@${getVersion('vite')} + Less@${getVersion('less')} 开发`
  featureDetails.textContent = developDesc
}
onMounted(() => {
  fetchVersion()
  //fetchDesc()
})
</script>



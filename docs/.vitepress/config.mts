import { defineConfig } from 'vitepress';

export default defineConfig({
	title: '算法刷题与题解',
	base: '/Leetcode-project/',
  head: [ // 网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  ],
	themeConfig: {
		logo: '/logo.jpg',
		nav: [
			{ text: '实战介绍', link: '/' },
			{
				text: 'easy',
				link: '/easy/141. 环形链表',
			},
			{
				text: '中等',
				link: '/medium/142. 环形链表 II',
			},
			{
				text: '困难',
				link: '/hard/25. K 个一组翻转链表',
			},
		],
    editLink: {
      pattern: 'https://github.com/exploitationExplorers/Leetcode-project/tree/main/docs/',
      text: 'Suggest changes to this page',
    },
		sidebar: [
			{
				text: 'easy',
				items: [
					{ text: '141. 环形链表', link: '/easy/141. 环形链表' },
					{ text: '202. 快乐数', link: '/easy/202. 快乐数' },
					{ text: '206. 反转链表', link: '/easy/206. 反转链表' },
					{ text: '704. 查看数组中的元素', link: '/easy/704. 查找数组中的元素' },
				],
			},
			{
				text: '中等',
				items: [
					{ text: '142. 环形链表 II', link: '/medium/142. 环形链表 II' },
					{ text: '92. 反转链表 II', link: '/medium/92. 反转链表 II' },	
				]
			},
			{
				text: '困难',
				items: [
					{ text: '25. K 个一组翻转链表', link: '/hard/25. K 个一组翻转链表' },
				]
			},
		],
	},
});

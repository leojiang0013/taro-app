export default defineAppConfig({
  pages: ["pages/index/index", "pages/explore/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  preloadRule: {
    "pages/explore/index": {
      packages: ["packageA", "packageB"],
      network: "all",
    },
  },
  subpackages: [
    {
      root: "packageA", //普通分包
      name: "animal",
      pages: ["pages/cat/index"],
    },
    {
      root: "packageB", //独立分包
      name: "box",
      pages: ["pages/box/index","pages/messages/index"],
      // independent: true,
    },
  ],
  tabBar: {
    color: "#000000",
    selectedColor: "#4d93ff",
    list: [
      {
        iconPath: "assets/icons/1.png",
        selectedIconPath: "assets/icons/4.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "assets/icons/2.png",
        selectedIconPath: "assets/icons/3.png",
        pagePath: "pages/explore/index",
        text: "发现",
      },
    ],
  },
  lazyCodeLoading: "requiredComponents",
});

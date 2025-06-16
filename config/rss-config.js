// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
     {
      name: "cnbeta",
      url: "http://feeds2.feedburner.com/cnbeta-full",
      category: "科技资讯",
    },
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    },
    {
      name: "Hacker News 历史每日前十",
      url: "https://rsshub.rssforever.com/github/issue/headllines/hackernews-daily",
      category: "科技资讯",
    },
    {
      name: "Github 今日热门",
      url: "https://rsshub.rssforever.com/github/trending/daily/any",
      category: "代码项目",
    },
    {
      name: "Github 近一周热门",
      url: "https://rsshub.rssforever.com/github/trending/weekly/any",
      category: "代码项目",
    },
    {
      name: "Hugging Face 每日论文",
      url: "https://rsshub.rssforever.com/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsshub.rssforever.com/huggingface/blog",
      category: "技术博客",
    },
  
  
   
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}

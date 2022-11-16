let datas = [
  {
    platform: '微博',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '千粉素人'
  },
  {
    platform: '微博',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '万粉素人'
  },
  {
    platform: '小红书',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '千粉以上'
  },
  {
    platform: '小红书',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '万粉以上'
  },
  {
    platform: '小红书',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '10万粉以上'
  },
  {
    platform: '抖音',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '千粉以上'
  },
  {
    platform: '抖音',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '万粉以上'
  },
  {
    platform: '抖音',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '10万粉以上'
  },
  {
    platform: '快手',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '千粉以上'
  },
  {
    platform: '快手',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '万粉以上'
  },
  {
    platform: '快手',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '10万粉以上'
  },
  {
    platform: '知乎',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '百粉'
  },
  {
    platform: '知乎',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '千粉'
  },
  {
    platform: '知乎',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '万粉'
  },
  {
    platform: 'B站',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '百粉'
  },
  {
    platform: 'B站',
    price: '',
    category1: '供稿直发',
    price2: '',
    category2: '原创直发',
    content: '千粉'
  }
]

const reduc = data => {
  let result = new Map()
  data.reduce((res, item) => {
    if (res.has(item.platform)) {
      // res.set(item.platform, [...res.get(item.platform), item])
      res.get(item.platform).push(item)
    } else {
      res.set(item.platform, [item])
    }
    return res
  }, result)
  return result
}

// reduc(datas)
console.log(datas, reduc(datas))

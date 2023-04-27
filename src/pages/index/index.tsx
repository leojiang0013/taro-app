import Taro, { useShareAppMessage, useShareTimeline, onCopyUrl, showShareMenu } from '@tarojs/taro';
import { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { Button, ConfigProvider } from "@taroify/core";
import { PointGiftOutlined } from "@taroify/icons";
import './index.scss';

export default function Index() {
  useEffect(() => {
    //转发
    showShareMenu({
      withShareTicket: true
    });

    //复制链接
    onCopyUrl(() => {
      return { query: 'a=1&b=2' };
    })
  }, [])

  //分享至好友
  useShareAppMessage(() => {
    return {
      title: 'A Boring Miniprogram',
      path: '/pages/index/index',
      imageUrl: '/assets/icons/share.png',
    }
  })

  //分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'A Boring Miniprogram',
      path: '/pages/index/index',
      imageUrl: '/assets/icons/share.JPG',
    }
  })

  const handleTap = () => {
    const num: number = Math.floor(Math.random() * 10);
    Taro.showModal({
      title: '您的幸运数字是',
      content: String(num),
    })
  }

  return (
    <View className='main'>
      <View>
        <Text>Index</Text>
      </View>
      <ConfigProvider theme={{ buttonFontSizeLarge: "20px", buttonBorderRadius: "10px" }}>
        <Button size='large' variant='contained' color='primary' icon={<PointGiftOutlined />} onTap={handleTap}>Click</Button>
      </ConfigProvider>
    </View>
  )
}

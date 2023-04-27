import { useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Input } from '@tarojs/components';
import { Field, Badge, Button, ConfigProvider } from "@taroify/core";
import { ChatOutlined } from "@taroify/icons";
import './index.scss';


export default function Box() {
  const [messages, setMessages] = useState<string[]>([]);
  const textbox: any = useRef<HTMLInputElement>(null);

  const handleTap = () => {
    const node = textbox.current;
    if (node) {
      let value = node.value;
      if (value !== '') {
        setMessages([...messages, value]);
      }
    }
  }

  const num: string = String(messages.length);
  let dataStr = messages.join(".");

  const checkMessage = () => {
    Taro.navigateTo({ url: `/packageB/pages/messages/index?messages=${dataStr}` });
  }

  return (
    <View className='main'>
      <Field align='start' label='留言' bordered>
        <Input placeholder='请输入文本' ref={textbox as React.RefObject<HTMLInputElement>} />
      </Field>
      <ConfigProvider theme={{ buttonFontSizeLarge: "20px", buttonBorderRadius: "10px" }}>
        <Button size='large' variant='contained' color='primary' onTap={handleTap}>提交</Button>
      </ConfigProvider>
      <View className='icon' onTap={checkMessage}>
        <Badge content={num}>
          <ChatOutlined size='35px' />
        </Badge>
      </View>
    </View>
  )
}

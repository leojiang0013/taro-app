import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';


export default function Message() {
  let messages: string[] = [];
  if (Taro.getCurrentInstance().router?.params.messages !== undefined) {
    const dataStr: string = (Taro.getCurrentInstance().router?.params.messages) as string;
    messages = [...dataStr.split(".")];
  }

  return (
    <View className='main'>
      {
        messages.map((item) => (
          <View key={item}>{item}</View>
        ))
      }
    </View>
  )
}

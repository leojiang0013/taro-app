import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Picker } from "@taroify/core";
import './index.scss';


export default function Explore() {
  const goPages = (value: string[]) => {
    switch (value[0]) {
      case "Cat":
        Taro.navigateTo({
          url: "/packageA/pages/cat/index"
        });
        break;
      case "Box":
        Taro.navigateTo({
          url: "/packageB/pages/box/index"
        });
        break;
      default:
        break;
    }
  }
  return (
    <View className='main'>
      <View>
        <Text>Explore</Text>
      </View>
      <Picker onConfirm={goPages}>
        <Picker.Toolbar>
          <Picker.Button>取消</Picker.Button>
          <Picker.Title>标题</Picker.Title>
          <Picker.Button>确认</Picker.Button>
        </Picker.Toolbar>
        <Picker.Column>
          <Picker.Option>Cat</Picker.Option>
          <Picker.Option>Box</Picker.Option>
        </Picker.Column>
      </Picker>
    </View>
  )
}

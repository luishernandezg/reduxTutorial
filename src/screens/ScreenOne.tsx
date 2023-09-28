import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootState, actions, useAppSelector} from '../store/root.store';

const ScreenOne = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const listImage = useAppSelector((state: RootState) => state.image.listImage);
  const handleNavigateToScreenTwo = () => {
    navigation.navigate('ScreenTwo');
  };

  const [loading, setLoading] = useState(false);

  const handleGetListImage = async () => {
    setLoading(true);
    await actions.image.getListImage();
    setLoading(false);
  };

  return (
    <ScrollView>
      <Button
        title="Navigate screen 2"
        onPress={handleNavigateToScreenTwo}></Button>
      <View style={{height: 15}} />
      <Button title="Get Data" onPress={handleGetListImage}></Button>
      {loading && (
        <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
      )}
      {listImage.map(value => {
        return (
          <View key={value.id}>
            <Text>{value.title}</Text>
            <Image
              source={{uri: value.thumbnailUrl}}
              style={{
                width: 120,
                height: 120,
              }}></Image>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ScreenOne;

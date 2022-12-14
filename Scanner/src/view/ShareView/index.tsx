import React, {useEffect, useState} from 'react';
import {Alert, Button, ScrollView, Share, TouchableOpacity, View} from 'react-native';
import logo from '../../assets/images/logo.png';
import {navigationNoPrivate} from '../../libs/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  ContainerLogo,
  ContainerMenu,
  Content,
  Logo,
  TextInfo,
  TextSlogan,
} from './styles';

export default function ShareView() {
  const navigation = navigationNoPrivate();
  const [menu, setMenu] = useState<boolean>(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Baixe agora o melhor aplicativo de Scanner!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error?.message);
    }
  };

  return (
    <Container>
      <ContainerMenu>
        <Button title="Menu" onPress={() => setMenu(!menu)} />
      </ContainerMenu>

      {menu && (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeView')}>
            <TextInfo>Sobre</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ScannerView')}>
            <TextInfo>Scanner</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ScannerView')}>
            <TextInfo>Salvos</TextInfo>
          </TouchableOpacity>
        </View>
      )}

        <Content>
        <Button onPress={onShare} title="Share" />
        </Content>
    </Container>
  );
}

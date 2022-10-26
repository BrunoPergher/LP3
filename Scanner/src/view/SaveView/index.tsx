import React, {useEffect, useState} from 'react';
import {Button, ScrollView, TouchableOpacity, View} from 'react-native';
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

export default function SaveView() {
  const navigation = navigationNoPrivate();
  const [loading, setLoading] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [codebar, setCodebar] = useState<string>('');

  useEffect(() => {
    getAsyncStorage();
  }, []);

  async function getAsyncStorage() {
    let qrcodeee = await AsyncStorage.getItem('device_token');
    if (qrcodeee) {
      setCodebar(qrcodeee);
    }
  }

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

      <ScrollView>
        <Content>
          <ContainerLogo>
            <Logo source={logo} resizeMode={'contain'} />
          </ContainerLogo>

          <TextSlogan>Scanner - Salvo</TextSlogan>

          <TextSlogan>Ultimo qrcode salvo: {codebar}</TextSlogan>
        </Content>
      </ScrollView>
    </Container>
  );
}

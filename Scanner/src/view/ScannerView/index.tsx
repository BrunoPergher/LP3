import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { navigationNoPrivate } from '../../libs/navigation';
import {
  Container, ContainerMenu,
  Content, TextInfo
} from './styles';

export default function ScannerView() {
  const navigation = navigationNoPrivate();
  const [loading, setLoading] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [codebar, setCodebar] = useState<string>('');

  function ReadQRCode(qrcode: any[]) {
    console.log(qrcode);
    console.log(qrcode[0]?.data);
    setCodebar(qrcode[0]?.data);

    AsyncStorage.setItem('device_token', codebar);
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
          <TouchableOpacity onPress={() => navigation.navigate('SaveView')}>
            <TextInfo>Salvos</TextInfo>
          </TouchableOpacity>
        </View>
      )}

      {<TextInfo>{codebar}</TextInfo>}
      <Content>
        <RNCamera
          style={{
            flex: 1,
            width: '100%',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            ReadQRCode(barcodes);
          }}></RNCamera>
      </Content>
    </Container>
  );
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Linking,
  Share,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import api from '../../libs/api';
import {navigationNoPrivate} from '../../libs/navigation';
import {key} from '../../libs/utils';
import {
  Container,
  ContainerMenu,
  Content,
  TextInf0,
  TextInfo,
  TextUrl,
} from './styles';

export type Data = {
  title: string;
  description: string;
};

export default function ScannerView() {
  const navigation = navigationNoPrivate();
  const [loading, setLoading] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);
  const [codebar, setCodebar] = useState<string>('');

  const [dataURL, setDataURL] = useState<Data[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const onShare = async (codebar: string) => {
    try {
      const result = await Share.share({
        message: codebar,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert('Erro!', 'Erro...');
    }
  };

  async function ReadQRCode(qrcode: any[]) {
    if (qrcode.length > 0) {
      await AsyncStorage.setItem('device_token', qrcode[0]?.data)

      setLoading(false);
      setCodebar(qrcode[0]?.data);

      const result = await api.get(`?key=` + key + `&q=` + qrcode[0]?.data);

      setDataURL(result.data);
      setLoadingData(true);
    } else {
      console.log('não leu');
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
          <TouchableOpacity onPress={() => navigation.navigate('SaveView')}>
            <TextInfo>Salvos</TextInfo>
          </TouchableOpacity>
        </View>
      )}

      {!loading && loadingData && (
        <>
          <TextInf0>INFOS</TextInf0>
          <TextInf0>{codebar}</TextInf0>
          <TextInf0>Titulo: {dataURL?.title}</TextInf0>
          <TextInf0>Descrição: {dataURL?.description}</TextInf0>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(codebar);
            }}>
            <TextUrl>Abrir site</TextUrl>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onShare(codebar);
            }}>
            <TextUrl>Compartilhar</TextUrl>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLoading(true);
            }}
          />
        </>
      )}
      <Content>
        {loading && (
          <RNCamera
            style={{
              flex: 1,
              width: '100%',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              ReadQRCode(barcodes);
            }}></RNCamera>
        )}

        {!loading && (
          <Button
            title="LER NOVAMENTE"
            onPress={() => {
              setLoading(true);
            }}
          />
        )}
      </Content>
    </Container>
  );
}

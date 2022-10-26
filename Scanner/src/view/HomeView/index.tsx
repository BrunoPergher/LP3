import React, { useState } from 'react';
import { Button, ScrollView, TouchableOpacity, View } from 'react-native';
import logo from '../../assets/images/logo.png';
import { navigationNoPrivate } from '../../libs/navigation';
import {
  Container,
  ContainerLogo,
  ContainerMenu,
  Content,
  Logo,
  TextInfo,
  TextSlogan
} from './styles';

export default function HomeView() {
  const navigation = navigationNoPrivate();
  const [loading, setLoading] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <Container>
      <ContainerMenu>
        <Button title="Menu" onPress={() => setMenu(!menu)} />
      </ContainerMenu>

      {menu && (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("HomeView")}>
            <TextInfo>Sobre</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ScannerView")}>
            <TextInfo>Scanner</TextInfo>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SaveView")}>
            <TextInfo>Salvos</TextInfo>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView>
        <Content>
          <ContainerLogo>
            <Logo source={logo} resizeMode={'contain'} />
          </ContainerLogo>

          <TextSlogan>Scanner - Sobre</TextSlogan>

          <TextSlogan>Aluno: Bruno Pergher</TextSlogan>

          <TextInfo>Esse app é utilizado para a leitura de QR Codes, e armazenamento de informações do mesmo, viu um qr code que não conseguiu abrir? sem problemas pois estará salvo as informações dele para em outro momento com mais tempo você revisar</TextInfo>
        </Content>
      </ScrollView>
    </Container>
  );
}

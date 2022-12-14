import React, {useState} from 'react';
import InputComponent from '../../components/InputComponent';
import logo from '../../assets/images/logo.png';
import {navigationNoPrivate} from '../../libs/navigation';
import {Alert, Button, ScrollView} from 'react-native';
import {
  Container,
  Logo,
  Content,
  ContainerLogo,
  TextForgotPassword,
  TextInfo,
  ContainerButton,
  TextSlogan,
} from './styles';
import {signIn} from '../../libs/utils';
import { getDBConnection, saveUser } from '../../libs/db';
import { User } from '../../models/Register';

export default function RegisterView() {
  const navigation = navigationNoPrivate();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleRegister() {
    setLoading(true);

    if(user === '' || password === ''){
      return Alert.alert('Erro!', 'Falha ao criar conta.');
    }

    const db = await getDBConnection();

    let userData: User[];

    userData = [{user: user, password: password}];

    await saveUser(db, userData);

    return navigation.navigate('LoginView');
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          <ContainerLogo>
            <Logo source={logo} />
          </ContainerLogo>

          <TextSlogan>Scanner</TextSlogan>

          <InputComponent
            name="email"
            placeholder="Crie seu user"
            keyboardType="email-address"
            onChangeText={setUser}
            value={user}
          />

          <InputComponent
            placeholder="Crie sua senha"
            name="password"
            secure={true}
            onChangeText={setPassword}
            value={password}
          />

          <ContainerButton>
            <Button title="REGISTRAR" color={'orange'} onPress={() => handleRegister()} />
          </ContainerButton>
        </Content>
      </ScrollView>
    </Container>
  );
}

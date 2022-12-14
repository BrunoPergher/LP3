import React, {useCallback, useEffect, useState} from 'react';
import InputComponent from '../../components/InputComponent';
import logo from '../../assets/images/logo.png';
import {navigationNoPrivate} from '../../libs/navigation';
import {Alert, Button, Linking, ScrollView} from 'react-native';
import {
  Container,
  Logo,
  Content,
  ContainerLogo,
  TextForgotPassword,
  TextInfo,
  ContainerButton,
  TextSlogan,
  Space,
} from './styles';
import {signIn} from '../../libs/utils';

import {openDatabase} from 'react-native-sqlite-storage';
import {
  createTable,
  getDBConnection,
  getUser,
  LoginUser,
  saveUser,
} from '../../libs/db';
import {User} from '../../models/Register';

// const db = openDatabase({ name: 'UserDatabase.db' });

export default function LoginView() {
  const navigation = navigationNoPrivate();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [usersData, setUsers] = useState<any[]>([]);

  const loadDataCallback = useCallback(async () => {
    try {
      const initUsers = [
        {id: 0, user: 'admin', password: 'admin'},
        {id: 1, user: 'admin1', password: 'admin1'},
      ];
      const db = await getDBConnection();
      await createTable(db);
      const storedTodoItems = await getUser(db);

      console.log(storedTodoItems);

      if (storedTodoItems.length) {
        setUsers(storedTodoItems);
      } else {
        await saveUser(db, initUsers);
        setUsers(initUsers);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  async function handleSignIn() {
    if (user === '' || password === '') {
      return Alert.alert('Erro!', 'Falha ao logar na conta.');
    }

    const db = await getDBConnection();

    let userData: User[];

    userData = [{user: user, password: password}];

    const result = await LoginUser(db, userData);

    if(result){
        navigation.navigate('HomeView');
    } else {
        return Alert.alert('Erro!', 'Falha ao logar na conta.');
    }
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
            placeholder="Insira seu user"
            keyboardType="email-address"
            onChangeText={setUser}
            value={user}
          />

          <InputComponent
            placeholder="Insira sua senha"
            name="password"
            secure={true}
            onChangeText={setPassword}
            value={password}
          />

          <Button
            title="Registrar"
            color={'orange'}
            onPress={() => navigation.navigate('RegisterView')}
          />

          <Space></Space>

          <ContainerButton>
            <Button title="Entrar" onPress={() => handleSignIn()} />
          </ContainerButton>
        </Content>
      </ScrollView>
    </Container>
  );
}

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RoutesNoPrivate from './routes.no.private';

const Routes: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return <RoutesNoPrivate />;
}

export default Routes;
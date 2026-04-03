import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.buddy.app',
  appName: 'Buddy',
  webDir: 'dist/apps/buddy-frontend/browser',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0F1419',
      showSpinner: false,
    },
    StatusBar: {
      backgroundColor: '#0F1419',
      style: 'DARK',
    },
  },
};

export default config;

import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: 'Home',
          title: 'Welcome Back',
        }}
      />
      <Drawer.Screen
        name="profile" 
        options={{
          drawerLabel: 'User',
          title: 'Welcome Back',
        }}
      />
    </Drawer>
  );
}

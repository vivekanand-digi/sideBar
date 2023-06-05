import React from 'react';
import { Menu } from 'antd';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LaptopIcon from '@mui/icons-material/Laptop';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import BrushIcon from '@mui/icons-material/Brush';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AddIcon from '@mui/icons-material/Add';
import MainPage from './MainPage';
import BarChart from './BarChart';
import PieChart from './PieChart';
import NavigationBar from './NavigationBar';
import Sales from './Sales';


function SideBar() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '0fr 1fr', gap: '40px' }}>
      <div>
        <Menu
          mode="inline"
          defaultOpenKeys={['settings', 'dashboard', 'um', 'po']}
          style={{ backgroundColor: 'lightblue' }}
          items={[
            { label: 'Home', key: 'home', icon: <HomeIcon /> },
            {
              label: 'Dashboard',
              key: 'dashboard',
              icon: <DashboardIcon />,
              children: [
                { label: 'Revenue', key: 'revenue', icon: <MonetizationOnIcon /> },
                { label: 'Expenses', key: 'expenses', icon: <CurrencyRupeeIcon /> },
              ],
            },
            {
              label: 'User Management',
              key: 'um',
              icon: <SupervisedUserCircleIcon />,
              children: [
                { label: 'Add Account', key: 'addaccount', icon: <AddIcon /> },
                { label: 'Edit Profile', key: 'editprofile', icon: <EditIcon /> },
                { label: 'Switch Account', key: 'switchaccount', icon: <SwitchAccountIcon /> },
              ],
            },
            {
              label: 'Settings',
              key: 'settings',
              icon: <SettingsIcon />,
              children: [
                { label: 'System', key: 'system', icon: <LaptopIcon /> },
                { label: 'Bluetooth & devices', key: 'bluetooth', icon: <BluetoothIcon /> },
                { label: 'Network & internet', key: 'network', icon: <SignalWifiStatusbar4BarIcon /> },
                { label: 'Personalization', key: 'personalization', icon: <BrushIcon /> },
                { label: 'Battery', key: 'battery', icon: <BatteryFullIcon /> },
                { label: 'Sounds', key: 'sounds', icon: <VolumeUpIcon /> },
                { label: 'Accounts', key: 'accounts', icon: <AccountCircleIcon /> },
                { label: 'Games', key: 'games', icon: <SportsEsportsIcon /> },
                { label: 'Language & Time', key: 'language', icon: <LanguageIcon /> },
                { label: 'Accessibility', key: 'accessibility', icon: <AccessibilityNewIcon /> },
                { label: 'Privacy & Security', key: 'privacy', icon: <PrivacyTipIcon /> },
                { label: 'Windows update', key: 'windows', icon: <AutorenewIcon /> },
              ],
            },
            {
              label: 'Power',
              key: 'po',
              icon: <PowerSettingsNewIcon />,
              children: [
                { label: 'Sleep', key: 'sleep', icon: <ModeNightIcon /> },
                { label: 'Shut Down', key: 'shutdown', icon: <PowerSettingsNewIcon /> },
                { label: 'Restart', key: 'restart', icon: <RestartAltIcon /> },
              ],
            },
          ]}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateRows: '0.5fr 0.8fr' }}>
        <div> <NavigationBar /></div>
        <MainPage />
        <div><Sales /></div>
        <div style={{ display: 'flex', gap:'20px' }}>
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default SideBar;

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import MoonIcon from '@mui/icons-material/DarkMode'
import SunIcon from '@mui/icons-material/LightMode'
import useSharedTheme from '../hooks/useTheme'

interface NavProps { }

const Nav: React.FC<NavProps> = (props) => {
  const { theme: paletteMode, toggle } = useSharedTheme();

  const theme = useTheme();

  const switchThemes = () => toggle();

  return (
    <AppBar position="relative" color="primary" style={{ display: 'flex' }}>
      <Toolbar>
        <Typography variant="h6" style={{ userSelect: 'none' }}>
          Byteroom
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton onClick={switchThemes} style={{ marginRight: theme.spacing(2) }}>
          {paletteMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </IconButton>
        <Button color="info" variant="contained">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
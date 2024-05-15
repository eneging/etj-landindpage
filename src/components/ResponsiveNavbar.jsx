import * as React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  { label: 'inicio', url: '/' },
  
  { label: 'Flota', url: '/flota' },
  { label: 'Clientes', url: '/Clientes' },
  { label: 'Facturacion', url: '#' },
  { label: 'Quienes Somos', url: '/QuienesSomos' },
  { label: 'Ubicaciones', url: '/Ubicaciones' },
  { label: 'Contacto', url: '/contactanos' },
  
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <div key={option.label}>
            {option.url === '#' ? (
              <MenuItem onClick={handleClose}>
                {option.label}
              </MenuItem>
            ) : (
              <Link to={option.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={handleClose}>
                  {option.label}
                </MenuItem>
              </Link>
            )}
            {option.subOptions && (
              <Menu
                id={`${option.label}-sub-menu`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {option.subOptions.map((subOption) => (
                  <Link key={subOption.label} to={subOption.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>
                      {subOption.label}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
}

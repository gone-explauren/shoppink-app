import Categories from './../Categories';
import CartPreview from '../CartPreview';
import { Box }  from '@mui/material';

function Nav() {

  return (
    <Box sx={{ display: 'flex' }}>
    <Categories />
    <CartPreview />
    </Box>
  )
}

export default Nav;
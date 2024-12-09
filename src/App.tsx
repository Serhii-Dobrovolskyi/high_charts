import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function App() {
  return (
    <>
    <Button variant="contained">Test Button</Button>
    <Stack >
      <Pagination count={10} color="primary" />
    </Stack>
    </>
  )
}

export default App

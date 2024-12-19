import PairList from './components/PairList'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, gap: 2 }}>
      <Typography
        variant='h4'
        color='secondary'
      >
        Real-Time Cryptocurrency Dashboard
      </Typography>
      <PairList />
    </Box>
  )
}

export default App

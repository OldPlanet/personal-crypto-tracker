import { Box, Button, Typography } from '@mui/material'

const CryptoPair = ({ ticker }: any) => {
  return (
    <Box
      sx={{
        width: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 1,
        gap: 0.5,
        border: '1px solid gray',
        borderRadius: 1,
        bgcolor: 'whitesmoke',
      }}
    >
      <Typography variant='h6'>{ticker.s}</Typography>
      <Typography>{ticker.c}</Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Button
          size='small'
          variant='contained'
          color='success'
        >
          SUB
        </Button>
        <Button
          size='small'
          variant='contained'
          color='error'
        >
          UNS
        </Button>
      </Box>
    </Box>
  )
}

export default CryptoPair

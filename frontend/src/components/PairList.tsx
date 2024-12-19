import { useState } from 'react'
import { useWebSocket } from '../hooks/useWebSocket'
import { Box, Grid2, Pagination } from '@mui/material'
import CryptoPair from './CryptoPair'

const PairList = () => {
  const { allTickers, subscribedTickers, sendMessage } = useWebSocket()
  // const [currentPage, setCurrentPage] = useState<number>(1)
  // const [totalPages, setTotalPages] = useState<number>(1)

  const handleSubscribe = (pair: string) => {
    sendMessage({ action: 'subscribe', pair })
  }

  const handleUnsubscribe = (pair: string) => {
    sendMessage({ action: 'unsubscribe', pair })
  }

  const handlePageChange = async (_: unknown, page: number) => {}

  return (
    <Box sx={{ width: '50%', overflow: 'hidden' }}>
      <Grid2
        width='100%'
        container
        spacing={1}
        display='flex'
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
      >
        {allTickers.map((ticker, index) => (
          <Grid2 key={index}>
            <CryptoPair ticker={ticker} />
          </Grid2>
        ))}
      </Grid2>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box> */}
    </Box>
  )
}

export default PairList

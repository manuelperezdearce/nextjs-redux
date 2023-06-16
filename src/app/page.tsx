'use client'

import { Typography, Stack, Button } from "@mui/material";
import { useAppSelector, useAppiDispatch } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counterSlice'

export default function Home() {
  const count = useAppSelector(state => state.counterSlice.value)
  const dispatch = useAppiDispatch()


  return (
    <Stack component={'main'} >
      <Typography marginBottom={5} textAlign={'center'} component={'h1'} variant="h3">Variables globales usando Redux</Typography>
      <Stack maxWidth={'800px'} direction={'row'} alignItems={'center'} justifyContent={"space-between"} gap={3} margin={'auto'}>
        <Button variant="outlined" color="success"
          onClick={() => {
            dispatch(increment())
          }
          }
        >Increment</Button>
        <Typography>{count}</Typography>
        <Button variant="outlined" color="error"
          onClick={() => {
            dispatch(decrement())
          }
          }
        >Decrement</Button>
      </Stack>
    </Stack >
  )
}

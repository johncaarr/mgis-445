/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactNode } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
  Divider,
} from '@mui/material'
import { Center } from '../../components'
import type { AppDispatch, CheckoutCrypto, StateEditor } from '../../types'

export interface CryptoEditorTabProps {
  crypto: CheckoutCrypto
  dispatch: AppDispatch
  setAddressTab: React.Dispatch<React.SetStateAction<string>>
  setFactorSalesTax: React.Dispatch<React.SetStateAction<boolean>>
  setShowBillingAddress: React.Dispatch<React.SetStateAction<boolean>>
  children?: null | ReactNode | ReactNode[]
}

export const CryptoEditorTab: React.FC<CryptoEditorTabProps> = ({
  crypto,
  dispatch,
  setAddressTab,
  setFactorSalesTax,
  setShowBillingAddress,
}) => {
  const editCrypto: StateEditor<CheckoutCrypto> = (key, value) => {
    dispatch({
      type: 'checkout/setCheckoutCrypto',
      payload: { ...crypto, [key]: value },
    })
  }

  setTimeout(() => setFactorSalesTax(false), 0)
  setTimeout(() => setAddressTab('shipping'), 0)
  setTimeout(() => setShowBillingAddress(false), 0)

  return (
    <Card>
      <CardHeader title='Crypto - ScamCo1n' />
      <CardContent>
        <Container>
          <Grid container sx={{ paddingTop: 1 }}>
            <Grid item xs={12} sx={{ padding: 1 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor='wallet-input'>
                  ScamCo1n Wallet Address
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id='wallet-input'
                  label='ScamCo1n Wallet Address'
                  aria-describedby='wallet-text'
                  value={crypto.cryptoWalletAddress}
                  onChange={(event) =>
                    editCrypto('cryptoWalletAddress', event.target.value)
                  }
                />
                <FormHelperText id='wallet-text'>
                  Your ScamCo1n public wallet address
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ padding: 3 }}>
          <Divider />
        </Box>
        <Container>
          <Center>
            <Typography variant='h5'>Scamaz0n now accepts ScamCo1n!</Typography>
          </Center>
          <Center sx={{ paddingTop: 2 }}>
            <Typography variant='body1'>
              ScamCo1n is our new in-house cryptocurrency
            </Typography>
          </Center>
          <Center sx={{ paddingTop: 2 }}>
            <Typography variant='subtitle1'>
              <i>No taxes!</i>
            </Typography>
          </Center>
          <Center sx={{ paddingTop: 1 }}>
            <Typography variant='subtitle1'>
              <i>No paper trail!</i>
            </Typography>
          </Center>
          <Center sx={{ paddingTop: 1 }}>
            <Typography variant='subtitle1'>
              <i>No guarantee you'll receive your purchase!</i>
            </Typography>
          </Center>
        </Container>
      </CardContent>
    </Card>
  )
}

export default CryptoEditorTab

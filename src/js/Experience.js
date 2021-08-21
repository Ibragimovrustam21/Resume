import * as React from 'react'
import Stack from '@material-ui/core/Stack'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/core/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

export const Experience = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 5000)
  }, [])

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
          <Alert onClose={handleClose} style={{ backgroundColor: '#182126' }} severity="info" sx={{ width: '100%' }}>
            My experience is about 7-8 months.But I believe in myself.
          </Alert>
        </Snackbar>
      </Stack>
    </>
  )
}

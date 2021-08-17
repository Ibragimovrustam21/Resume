import React from 'react'
import '../css/Skills.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Box, Typography } from '@material-ui/core'

export const Skills = ({ value, title }) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= value ? prevProgress : prevProgress + 1))
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, )

  return (
    <div className='skills_div' >
      <h5 >{title}</h5>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
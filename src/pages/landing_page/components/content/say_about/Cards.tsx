import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

interface CardProps {
  text: string;
  img: string;
}


const Cards = (props: CardProps) => {
  return (
    <Card
    
    sx={{
      width:'390px',
      textAlign:'center', 
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop:'80px',
      boxShadow:'none'

    }}
    >
        <Typography
        fontFamily='poppins'
        color='#6C6C6C'
        fontStyle='italic'
        fontSize='18px'
        >
         {props.text}
        </Typography>
       
       <Avatar alt='gambar reviewer' src={props.img} sx={{width:'80px', height:'80px', margin:'auto', marginTop:'50px'}} />
       
    </Card>
  )
}

export default Cards
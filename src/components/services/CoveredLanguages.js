import { Box, Typography } from '@mui/material';

const CoveredLanguages = () => {
    const languages = [
        "Hindi", "Bengali", "English", "Marathi", "Telugu", 
        "Assamese", "Sanskrit", "Urdu", "Rajasthani", 
        "Maithili", "Santali"
    ];

    return (

        <div style={{marginBottom:"50px"}}>
        <Box
            sx={{
                height: "500px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Center contents vertically
                alignItems: 'center', // Center contents horizontally
                background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Adjust the gradient colors
                padding: 4,
                color: 'white',
                border: '2px solid black', // Add black border
                borderRadius: '15px' // Round the corners
            }}
        >
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', width: '100%' }}>
                Languages we have worked in
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Center language boxes horizontally
                    alignItems: 'center', // Center language boxes vertically
                    width: '100%',
                    marginTop: 5,
                    flexWrap: 'wrap' // Ensure languages wrap to the next line if they don't fit
                }}
            >
                {languages.map((ele, i) => (
                    <Box sx={{ maxWidth: '25%', textAlign: 'center', margin: {xs:1,sm:2,md:3} }} key={i}>
                        <Typography variant="subtitle1">
                            {ele}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
        </div>
    );
};

export default CoveredLanguages;


// import { Box, Typography } from '@mui/material';

// const CoveredLaguages = () => {
//     const language=["Hindi","Bengali","English","Marathi","Telugu","Assamese","Sanskrit","Urdu","Rajasthani","Maithili","Santali"]

//   return (
//     <Box
//     sx={{
//       height:"500px",
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       background: 'linear-gradient(to right, #4c00ff, #1b1464)', // Adjust the gradient colors
//       padding: 4,
//       color: 'white',
//     }}
//   >
//     <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', width: '100%' }}>
//       Languages we have worked in
//     </Typography>
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-around', // Distribute languages evenly
//         width: '100%',
//         marginTop: 2,
//         flexWrap: 'wrap' // Ensure languages wrap to the next line if they don't fit
//       }}
//     >
//       {language.map((ele, i) => (
//         <Box sx={{ maxWidth: '25%', textAlign: 'center', margin: 1 }} key={i}>
//           <Typography variant="subtitle1">
//             {ele}
//           </Typography>
//         </Box>
//       ))}
//     </Box>
//   </Box>
  

//   );
// };

// export default CoveredLaguages;

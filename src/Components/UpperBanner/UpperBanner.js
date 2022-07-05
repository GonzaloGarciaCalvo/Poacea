import Box from '@mui/material/Box';

import React from 'react'

function UpperBanner() {
  return (
    <Box
				sx={{ width: "100%", height: "7.2rem", backgroundColor: "#F90606" }}
				className="upperBanner"
			>
				<div className="upperBanner__boxItem">
					<img src="../../images/icons_upperBanner/upper_instagram.svg" alt='link a instagram'/>
				<div>
						<p>Stalkéanos</p>
						<p>@ppoaceaa</p>
					</div>
				</div>
				<div className="upperBanner__boxItem">
					<img src="../../images/icons_upperBanner/upper_email.svg" alt='link a instagram'/>
					<div>
						<p>Cotiza</p>
						<p>info@poacea.cl</p>
					</div>
				</div>
				<div className="upperBanner__boxItem">
					<img src="../../images/icons_upperBanner/upper_whatsapp.svg" alt='link a instagram'/>
					<div>
						<p>Contáctanos</p>
						<p>+56 997 773 406</p>
					</div>
				</div>
			</Box>
  )
}

export default UpperBanner
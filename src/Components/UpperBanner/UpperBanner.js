
import "./UperBanner.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function UpperBanner() {
  return (
	<div className="boxInfo">
				<div>
					<a href='https://www.instagram.com/ppoaceaa/' target="_blank" rel="noreferrer">
						<InstagramIcon />
						<div>
							<p>Stalkéanos</p>
							<p className="pRemovible">@ppoaceaa</p>
						</div>
					</a>
				</div>
				<div>
					<a href='mailto:info@poacea.cl' rel="noreferrer">
					<EmailIcon />
					<div>
						<p>Cotizá</p>
						<p className="pRemovible">info@poacea.cl</p>
					</div>
					</a>
				</div>
				<div>
					<a href="https://wa.me/+56997773406" target="_blank" rel="noreferrer">
						<WhatsAppIcon />
						<div>
							<p>Contáctanos</p>
							<p className="pRemovible">+56 997 773 406</p>
						</div>
					</a>
				</div>
			</div>
    // <Box
	// 			sx={{ width: "100%", height: "7.2rem", backgroundColor: "#F90606" }}
	// 			className="upperBanner"
	// 		>
	// 			<div className="upperBanner__boxItem">
	// 				<img src="../../images/icons_upperBanner/upper_instagram.svg" alt='link a instagram'/>
	// 			<div>
	// 					<p>Stalkéanos</p>
	// 					<p>@ppoaceaa</p>
	// 				</div>
	// 			</div>
	// 			<div className="upperBanner__boxItem">
	// 				<img src="../../images/icons_upperBanner/upper_email.svg" alt='link a instagram'/>
	// 				<div>
	// 					<p>Cotiza</p>
	// 					<p>info@poacea.cl</p>
	// 				</div>
	// 			</div>
	// 			<div className="upperBanner__boxItem">
	// 				<img src="../../images/icons_upperBanner/upper_whatsapp.svg" alt='link a instagram'/>
	// 				<div>
	// 					<p>Contáctanos</p>
	// 					<p>+56 997 773 406</p>
	// 				</div>
	// 			</div>
	// 		</Box>
  )
}

export default UpperBanner
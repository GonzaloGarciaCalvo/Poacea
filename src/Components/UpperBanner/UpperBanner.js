
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
					<a href='mailto:poacea3@gmail.com' rel="noreferrer">
					<EmailIcon />
					<div>
						<p>Cotizá</p>
						<p className="pRemovible">poacea3@gmail.com</p>
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
  )
}

export default UpperBanner
import { ReactComponent as Logo } from '../../assets/alba-logo.svg'
import { ReactComponent as LinkedLogo } from '../../assets/linked.svg'
import { ReactComponent as IgLogo } from '../../assets/ig.svg'
import { ReactComponent as FbLogo } from '../../assets/fb.svg'

import styles from './footer.module.css'
import LinkButton from '../button/LinkButton'

const website: Array<string> = ['About', 'Service', 'Portofolio', 'Blog', 'Career']

function Footer() {
	return (
		<section className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.desc}>
					<Logo />
					<p>
						Albatech acts as a corporate partner to help digitize their business to accelerate
						trends in remote work.
					</p>
					<div className={styles.logos}>
						<a>
							<FbLogo />
						</a>
						<a>
							<IgLogo />
						</a>
						<a>
							<LinkedLogo />
						</a>
					</div>
				</div>
				<div className={styles.website}>
					<h2>Website</h2>
					<div className={styles.links}>
						{website.map((w) => (
							<LinkButton key={`footer-${w}`}>{w}</LinkButton>
						))}
					</div>
				</div>
				<div className={styles.contact}>
					<h2>Contact</h2>
					<p>
						The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang,
						Banten 15143
					</p>
					<p>
						P: <LinkButton>+62 81 1889 3383</LinkButton>
					</p>
					<p>
						E: <LinkButton>info@albatech.id</LinkButton>
					</p>
				</div>
			</div>
			<div className={styles.subfooter}>
				<div>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</div>
				<div>Privacy policy | Terms of service</div>
			</div>
		</section>
	)
}

export default Footer

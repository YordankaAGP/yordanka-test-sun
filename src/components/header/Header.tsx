import styles from './header.module.css'
import LinkButton from '../button/LinkButton'
import { ReactComponent as Logo } from '../../assets/alba-logo.svg'
import { ReactComponent as Burger } from '../../assets/burger.svg'
import { useState } from 'react'
import LoginModal from '../modal/LoginModal'
import Sidemenu from './Sidemenu'

const menu: Array<string> = ['Service', 'About', 'Portofolio', 'Blog', 'Career']

function Header() {
	const [shouldOpenSide, setShouldOpenSide] = useState(false)
	const [shouldOpenLogin, setShouldOpenLogin] = useState(false)
	return (
		<>
			<LoginModal isActive={shouldOpenLogin} onClose={() => setShouldOpenLogin(false)} />
			<Sidemenu menu={menu} isActive={shouldOpenSide} onClose={() => setShouldOpenSide(false)} />
			<header className={styles.fixedHeader}>
				<nav className={styles.headerMenu}>
					<div className={styles.left}>
						<button onClick={() => setShouldOpenSide(!shouldOpenSide)} className={styles.burger}>
							<Burger />
						</button>
						<Logo className={styles.logo} />
					</div>
					<div className={styles.right}>
						{menu.map((m) => (
							<LinkButton className={styles.link} key={m}>
								{m}
							</LinkButton>
						))}
						<button className={styles.cta} onClick={() => setShouldOpenLogin(true)}>
							Login
						</button>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header

import styles from './header.module.css'
import LinkButton from '../button/LinkButton'
import { ReactComponent as Logo } from '../../assets/alba-logo.svg'
import { ReactComponent as Burger } from '../../assets/burger.svg'
import { useState } from 'react'
import LoginModal from '../modal/LoginModal'
import Sidemenu from './Sidemenu'
import { useLocation, useNavigate } from 'react-router-dom'

const menu: Array<string> = ['Service', 'About', 'Portofolio', 'Blog', 'Career']

function Header() {
	const { state } = useLocation()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [shouldOpenSide, setShouldOpenSide] = useState(false)
	const [shouldOpenLogin, setShouldOpenLogin] = useState(false)
	return (
		<>
			<LoginModal isActive={shouldOpenLogin} onClose={() => setShouldOpenLogin(false)} />
			<Sidemenu
				menu={menu}
				isActive={shouldOpenSide}
				onLogin={() => setShouldOpenLogin(true)}
				onClose={() => setShouldOpenSide(false)}
			/>
			<header className={styles.fixedHeader}>
				<nav className={styles.headerMenu}>
					<div className={styles.left}>
						<button onClick={() => setShouldOpenSide(!shouldOpenSide)} className={styles.burger}>
							<Burger />
						</button>
						<Logo
							onClick={() => (pathname === '/' ? undefined : navigate('/'))}
							className={styles.logo}
						/>
					</div>
					<div className={styles.right}>
						{menu.map((m) => (
							<LinkButton className={styles.link} key={m}>
								{m}
							</LinkButton>
						))}
						{!state && !state?.token && (
							<button className={styles.cta} onClick={() => setShouldOpenLogin(true)}>
								Login
							</button>
						)}
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header

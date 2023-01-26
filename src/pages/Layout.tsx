import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import styles from './layout.module.css'
import { ReactComponent as Texture } from '../assets/texture.svg'
import Footer from '../components/footer/Footer'

function Layout() {
	return (
		<div className={styles.layoutContainer}>
			<Header onBurgerClick={() => {}} onLoginClick={() => {}} />
			<Texture className={styles.texture1} />
			<Texture className={styles.texture2} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout

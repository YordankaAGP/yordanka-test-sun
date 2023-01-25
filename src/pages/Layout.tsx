import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import styles from './styles.module.css'
import { ReactComponent as Texture } from '../assets/texture.svg'

function Layout() {
	return (
		<div className={styles.layoutContainer}>
			<Header onBurgerClick={() => {}} onLoginClick={() => {}} />
			<Texture className={styles.texture1} />
			<Texture className={styles.texture2} />
			<Outlet />
		</div>
	)
}

export default Layout

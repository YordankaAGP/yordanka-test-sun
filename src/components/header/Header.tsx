import styles from './header.module.css'
import LinkButton from '../button/LinkButton'
import { ReactComponent as Logo } from '../../assets/alba-logo.svg'

export type HeaderProps = {
	onBurgerClick: () => void
	onLoginClick: () => void
} & React.HTMLAttributes<HTMLDivElement>

const menu = ['service', 'about', 'portofolio', 'blog', 'career']

function Header(props: HeaderProps) {
	const { onBurgerClick, onLoginClick, className, ...rest } = props
	return (
		<header className={styles.fixedHeader}>
			<nav className={styles.headerMenu}>
				<div>
					{/* <button onClick={() => onBurgerClick()} className=''>
					<svg className='w-4 h-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
						<path
							fill='white'
							d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
						/>
					</svg>
				</button> */}
					<Logo className={styles.logo} />
				</div>
				<div className={styles.right}>
					{menu.map((m) => (
						<LinkButton className={styles.link} key={m}>
							{m}
						</LinkButton>
					))}
					<button className={styles.cta}>Contact Us</button>
				</div>
			</nav>
		</header>
	)
}

export default Header

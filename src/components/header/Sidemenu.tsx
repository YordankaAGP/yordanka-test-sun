import clsx from 'clsx'
import styles from './sidemenu.module.css'
import { ReactComponent as Logo } from '../../assets/alba-logo.svg'
import { ReactComponent as Close } from '../../assets/close.svg'
import LinkButton from '../button/LinkButton'

export type ModalProps = {
	isActive: boolean
	onClose: () => void
	onLogin: () => void
	menu: Array<string>
} & React.HTMLAttributes<HTMLElement>

function Sidemenu(props: ModalProps) {
	const { menu, isActive, onClose, onLogin, className, ...rest } = props
	return (
		<>
			<nav className={clsx(styles.sidemenu, className, { [styles.active]: isActive })} {...rest}>
				<button className={styles.close} onClick={() => onClose()}>
					<Close />
				</button>
				<Logo />
				{menu.map((m) => (
					<LinkButton className={styles.link} key={`side-${m}`}>
						{m}
					</LinkButton>
				))}
				<button
					className={styles.cta}
					onClick={() => {
						onClose()
						onLogin()
					}}>
					Login
				</button>
			</nav>
			<div
				onClick={() => onClose()}
				className={clsx({
					[styles.sidelayer]: true,
					[styles.active]: isActive,
				})}
			/>
		</>
	)
}

export default Sidemenu

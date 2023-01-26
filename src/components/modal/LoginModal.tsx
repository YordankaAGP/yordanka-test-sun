import Modal, { ModalProps } from './Modal'
import styles from './login.module.css'
import { ReactComponent as Close } from '../../assets/close.svg'

function LoginModal(props: ModalProps) {
	return (
		<Modal className={styles.modal} {...props}>
			<button className={styles.close} onClick={() => props.onClose()}>
				<Close />
			</button>
			<h2>Login</h2>
			<input placeholder='Email' />
			<input placeholder='Password' />
			<button className={styles.login}>Login</button>
		</Modal>
	)
}

export default LoginModal

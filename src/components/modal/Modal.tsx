import clsx from 'clsx'
import styles from './modal.module.css'

export type ModalProps = {
	isActive: boolean
	onClose: () => void
} & React.HTMLAttributes<HTMLDivElement>

function Modal(props: ModalProps) {
	const { isActive, onClose, children, className } = props
	return (
		<div className={clsx(styles.container, { [styles.active]: isActive })}>
			<div className={styles.layer} onClick={() => onClose()} />
			<div className={clsx(styles.modal, className)}>{children}</div>
		</div>
	)
}

export default Modal

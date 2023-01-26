import Modal, { ModalProps } from './Modal'
import styles from './login.module.css'
import { ReactComponent as Close } from '../../assets/close.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginModal(props: ModalProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errorMsg, setErrorMsg] = useState('')
	const navigate = useNavigate()

	const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		setErrorMsg('')
		setIsSubmitting(true)
		const payload: { [key: string]: string } = {}
		const formData = new FormData(e.currentTarget)
		for (const [key, value] of Array.from(formData)) {
			payload[key] = value as string
		}

		try {
			const response = await fetch('https://reqres.in/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})
			const data = await response.json()

			if ('error' in data) {
				setErrorMsg(data.error)
			} else if ('token' in data) {
				props.onClose()
				navigate('/profile', { state: { token: data.token } })
			}
		} catch (e) {
			console.error(e)
		}

		setIsSubmitting(false)
	}

	return (
		<Modal className={styles.modal} {...props}>
			<button className={styles.close} onClick={() => props.onClose()}>
				<Close />
			</button>
			<h2>Login</h2>
			<form onSubmit={handleFormSubmit} autoComplete='off'>
				<input placeholder='Email' name='email' required type='email' autoComplete='email' />
				<input placeholder='Password' name='password' required type='password' />
				<div className={styles.error}>{errorMsg}</div>
				<button disabled={isSubmitting} className={styles.login} type='submit'>
					{isSubmitting ? 'Loading...' : 'Login'}
				</button>
			</form>
		</Modal>
	)
}

export default LoginModal

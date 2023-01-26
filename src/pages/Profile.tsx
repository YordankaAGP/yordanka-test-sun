import { redirect, useLocation, useNavigate } from 'react-router-dom'
import styles from './profile.module.css'
import { useEffect } from 'react'

function Profile() {
	const { state } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (!state) {
			navigate('/', { replace: true })
		}
	}, [])

	return (
		<div className={styles.container}>
			<h1>{state && state.token}</h1>
		</div>
	)
}

export default Profile

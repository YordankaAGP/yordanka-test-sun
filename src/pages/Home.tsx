import imgUrl from '../assets/image.png'
import styles from './styles.module.css'

const Home = () => (
	<div className={styles.hero}>
		<h1>
			<span>Build or Scale Up</span> <br /> your development team
		</h1>
		<div className={styles.subtitle}>
			<div className={styles.line} />
			<h3>in weeks, not months</h3>
		</div>
		<button className={styles.cta}>Book now</button>
		<img src={imgUrl} />
	</div>
)

export default Home

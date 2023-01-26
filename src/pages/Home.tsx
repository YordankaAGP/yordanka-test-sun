import imgUrl from '../assets/image.png'
import { customers, logoUrls, portfolios, services } from './data'
import styles from './home.module.css'
import { ReactComponent as Quote } from '../assets/quote.svg'
import shortDotUrl from '../assets/short-dot.png'
import Carousel from '../components/carousel/Carousel'
import clsx from 'clsx'

const Home = () => (
	<>
		<section className={styles.heroContainer}>
			<div className={styles.hero}>
				<h1>
					<span>Build or scale up</span> <br /> <span>your development team</span>
				</h1>
				<div className={styles.subtitle}>
					<div className={styles.line} />
					<h3>in weeks, not months</h3>
				</div>
				<button className={styles.cta}>Book now</button>
				<img src={imgUrl} />
			</div>
		</section>
		<section className={styles.services}>
			<h3 className={styles.sectionSubtitle}>Complete Package</h3>
			<h2 className={styles.sectionTitle}>From product design to software continuous delivery</h2>
			<ul>
				{services.map((s) => (
					<li key={s.title} className={styles.list}>
						<s.svg />
						<h3>
							{s.title}
							<span>⟶</span>
						</h3>
						<div>{s.desc}</div>
					</li>
				))}
			</ul>
		</section>
		<section className={styles.logo}>
			{logoUrls.map((url) => (
				<img key={url} src={url} />
			))}
		</section>
		<section className={styles.achievementContainer}>
			<div className={styles.achievement}>
				<h2>
					Our Progress Comes with a Collaboration Between <br /> Creativity, Ideas, and Technology
				</h2>
				<div className={styles.achievementRow}>
					<div className={styles.achievementCol}>
						<h2>1000+</h2>
						<h3>Designs</h3>
					</div>
					<div className={styles.achievementCol}>
						<h2>30+</h2>
						<h3>Products</h3>
					</div>
					<div className={styles.achievementCol}>
						<h2>58+</h2>
						<h3>Website Development</h3>
					</div>
				</div>
			</div>
		</section>
		<section className={styles.portfolio}>
			<h3 className={styles.sectionSubtitle}>Portfolio</h3>
			<h2 className={styles.sectionTitle}>
				The software that we build <br /> takes our clients to the next level
			</h2>
			<ul>
				{portfolios.map((p) => (
					<li key={p.url} className={styles.portoCard}>
						<img src={p.url} />
						<h4>{p.type}</h4>
						<h3>{p.title}</h3>
						<p>{p.desc}</p>
					</li>
				))}
			</ul>
			<button className={styles.cta}>Learn more</button>
		</section>
		<section className={styles.testimonial}>
			<h3 className={styles.sectionSubtitle}>Testimonial</h3>
			<h2 className={styles.sectionTitle}>
				What clients love in working <br /> with Albatech Team
			</h2>
			<div className={styles.testimonies}>
				<div className={styles.left}>
					<Quote className={styles.startQuote} />
					<img src={shortDotUrl} className={styles.shortDot} />
					<div className={styles.big}>
						<h2>Amazing people</h2>
						<h3>
							"They are people who are not only following the tasks, but can work as a team.
							Together."
						</h3>
						<div className={styles.customerCard}>
							<span />
							<div>
								<h4>Matthijs Piëst</h4>
								<h5>COO at WieBetaaltWat</h5>
							</div>
						</div>
					</div>
					<div className={styles.small}>
						<h2>Amazing people</h2>
						<h3>
							"They are people who are not only following the tasks, but can work as a team.
							Together."
						</h3>
						<div className={styles.customerCard}>
							<div>
								<h4>Matthijs Piëst</h4>
								<h5>COO at WieBetaaltWat</h5>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<Quote className={styles.endQuote} />
					<div className={styles.small}>
						<h2>Amazing people</h2>
						<h3>
							"They are people who are not only following the tasks, but can work as a team.
							Together."
						</h3>
						<div className={styles.customerCard}>
							<div>
								<h4>Matthijs Piëst</h4>
								<h5>COO at WieBetaaltWat</h5>
							</div>
						</div>
					</div>
					<div className={styles.big}>
						<h2>Partnership approach</h2>
						<h3>
							“We felt like we had a true partner throughout the process. They were clearly
							interested on our long-term success.”
						</h3>
						<div className={styles.customerCard}>
							<span />
							<div>
								<h4>Matthijs Piëst</h4>
								<h5>COO at WieBetaaltWat</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className={styles.carousel}>
			<Carousel items={customers} perPage={5} />
		</section>
		<section className={styles.consultation}>
			<div className={styles.consult}>
				<h3>Is software important for your business?</h3>
				<h2>Build it with Albatech</h2>
				<button className={clsx(styles.cta, styles.consultCta)}>Consult now</button>
			</div>
		</section>
	</>
)

export default Home

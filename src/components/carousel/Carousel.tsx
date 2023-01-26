import { useEffect, useMemo, useState } from 'react'
import styles from './carousel.module.css'
import clsx from 'clsx'

type Props = {
	items: Array<string>
	perPage: number
}

function Carousel(props: Props) {
	const [items, setItems] = useState<Array<Array<string>>>([[]])
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const perPage = props.perPage > 0 ? props.perPage : 1
		let transformedItems: Array<Array<string>> = []
		props.items.forEach((i, idx) => {
			const currIdx = Math.ceil(idx / perPage) - 1
			if (transformedItems[currIdx] === undefined) transformedItems[currIdx] = [i]
			else transformedItems[currIdx].push(i)
		})
		setItems(transformedItems)
	}, [])

	const dotIter = useMemo(() => [...Array(items.length).keys()], [items])

	return (
		<>
			<div className={styles.items}>
				{items[index].map((i) => (
					<img src={i} key={i} />
				))}
			</div>
			<div className={styles.dot}>
				{dotIter.map((idx) => (
					<span
						key={`dot-${idx}`}
						className={clsx({ [styles.active]: idx === index })}
						onClick={() => setIndex(idx)}
					/>
				))}
			</div>
		</>
	)
}

export default Carousel

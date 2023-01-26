import clsx from 'clsx'
import styles from './link.module.css'

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
	children?: string
}

function LinkButton(props: Props) {
	const { children, className, ...rest } = props
	return (
		<a className={clsx(styles.linkButton, className)} {...rest}>
			<p>{children}</p>
			<span>{children}</span>
		</a>
	)
}

export default LinkButton

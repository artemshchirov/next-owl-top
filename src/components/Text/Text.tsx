import cn from 'classnames';
import styles from './Text.module.css';
import { TextProps } from './TextProps.props';

export const Text = ({
	size = 'md',
	children,
	className,
	...props
}: TextProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.sm]: size === 'sm',
				[styles.md]: size === 'md',
				[styles.lg]: size === 'lg',
			})}
			{...props}
		>
			{children}
		</p>
	);
};

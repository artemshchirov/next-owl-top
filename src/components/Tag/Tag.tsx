import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './TagProps.props';

export const Tag = ({
	size = 'sm',
	children,
	color = 'ghost',
	href,
	className,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.sm]: size == 'sm',
				[styles.md]: size == 'md',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.grey]: color == 'grey',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

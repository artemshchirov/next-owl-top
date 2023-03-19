import cn from 'classnames';
import styles from './Divider.module.css';
import { DividerProps } from './Divider.props';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return <hr className={cn(styles.divider, className)} {...props} />;
};

import cn from 'classnames';
import styles from './Textarea.module.css';
import { TextareaProps } from './TextareaProps.props';

export const Textarea = ({
	className,
	...props
}: TextareaProps): JSX.Element => {
	return <textarea className={cn(styles.textarea, className)} {...props} />;
};

import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './FooterProps.props';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>
				OwlTop © 2023 - {format(new Date(), 'yyyy')}. All rights reserved
			</div>
			<a href='#' target='_blank'>
				Terms of use
			</a>
			<a href='#' target='_blank'>
				Privacy policy
			</a>
		</footer>
	);
};

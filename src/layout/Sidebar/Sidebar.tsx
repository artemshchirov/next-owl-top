import cn from 'classnames';
import Link from 'next/link';
import { Search } from '../../components';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href='/'>
				<Logo className={styles.logo} />
			</Link>
			<Search />
			<Menu />
		</div>
	);
};

import cn from 'classnames';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import styles from './Menu.module.css';
import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Courses',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Services',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services,
	},
	{
		route: 'books',
		name: 'Books',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Products',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products,
	},
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.id}>
						<Link href={`/${m.route}`}>
							<div>
								<div
									className={cn(styles.firstLevel, {
										[styles.firstLevelActive]: m.id === firstCategory,
									})}
								>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</div>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened,
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(page => (
			<Link href={`/${route}/${page.alias}`}>
				<div
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: false,
					})}
				>
					{page.category}
				</div>
			</Link>
		));
	};

	return <div>{buildFirstLevel()}</div>;
};

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}

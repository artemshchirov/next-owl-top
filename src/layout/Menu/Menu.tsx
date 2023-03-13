import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map(m => {
					if (m._id.secondCategory === secondCategory) {
						setAnnounce(m.isOpened ? 'closed' : 'opened');
						m.isOpened = !m.isOpened;
					}
					return m;
				})
			);
	};

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
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2]))
						m.isOpened = true;

					return (
						<div key={m._id.secondCategory}>
							<button
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}
							>
								{m._id.secondCategory}
							</button>
							<div
								className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: m.isOpened,
								})}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(p => (
			<Link key={p._id} href={`/${route}/${p.alias}`}>
				<div
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
					})}
					aria-current={
						`/${route}/${p.alias}` === router.asPath ? 'page' : false
					}
				>
					{p.category}
				</div>
			</Link>
		));
	};

	return (
		<nav className={styles.menu} role='navigation'>
			{announce && (
				<span role='log' className='visuallyHidden'>
					{announce === 'opened' ? 'unrolled' : 'rolled up'}
				</span>
			)}
			{buildFirstLevel()}
		</nav>
	);
};

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}

import cn from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState('');

	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		goToSearch();
	};

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') goToSearch();
	};

	return (
		<form
			className={cn(styles.search, className)}
			{...props}
			role='search'
			onSubmit={onSubmit}
		>
			<Input
				placeholder='Search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button appearance='primary' className={styles.button}>
				<GlassIcon />
			</Button>
		</form>
	);
};

import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Rating, Tag, Text } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(0);

	return (
		<>
			<Htag tag='h1'>Title</Htag>
			<Button appearance='primary' arrow='right'>
				Button
			</Button>
			<Button appearance='ghost' arrow='down'>
				Button
			</Button>
			<Text size='lg'>Large</Text>
			<Text>Medium</Text>
			<Text size='sm'>Small</Text>
			<Tag size='sm' color='primary'>
				primary
			</Tag>
			<Tag size='md' color='red'>
				Red
			</Tag>
			<Tag size='sm' color='green'>
				Green
			</Tag>
			<Tag size='sm'>Ghost</Tag>
			<Rating rating={rating} setRating={setRating} isEditable></Rating>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

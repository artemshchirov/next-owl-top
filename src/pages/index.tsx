import { useState } from 'react';
import { Button, Htag, Rating, Tag, Text } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
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

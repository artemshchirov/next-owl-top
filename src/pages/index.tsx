import { useState } from 'react';
import { Button, Htag, Rating, Tag, Text } from '../components';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(0);

	return (
		<div>
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
			<Tag size='sm'>Ghost</Tag>
			<Tag size='md' color='red'>
				Red
			</Tag>
			<Tag size='sm' color='green'>
				Green
			</Tag>
			<Tag color='primary'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Tag color='ghost'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Tag color='green'>
				Green
			</Tag>
			<Rating rating={rating} setRating={setRating} isEditable></Rating>
		</div>
	);
}

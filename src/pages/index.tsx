import { Button, Htag, Tag, Text } from '../components';

export default function Home(): JSX.Element {
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
		</div>
	);
}

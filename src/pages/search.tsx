import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Search(): JSX.Element {
	return <></>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
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

interface SearchProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}

import { HeaderProps } from './HeaderProps.props';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};

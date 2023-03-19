import Image from 'next/image';
import { getEnglishDeclension } from '../../helpers/declensions';
import { priceRu } from '../../helpers/helpers';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Divider } from '../Divider/Divider';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';

export const Product = ({
	product,
	className,
	...props
}: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}>
				<Image
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
					alt={product.title}
					fill
				/>
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceRu(product.price)}
				{product.oldPrice && (
					<Tag className={styles.oldPrice} color='green'>
						{priceRu(product.price - product.oldPrice)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{priceRu(product.credit)}/<span className={styles.month}>month</span>
			</div>
			<div className={styles.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={styles.tags}>
				{product.categories.map(c => (
					<Tag key={c} className={styles.category} color='ghost'>
						{c}
					</Tag>
				))}
			</div>
			<div className={styles.priceTitle}>price</div>
			<div className={styles.creditTitle}>credit</div>
			<div className={styles.ratingTitle}>
				{getEnglishDeclension(product.reviewCount, 'review')}
			</div>
			<div className={styles.hline}>
				<Divider className={styles.hline} />
			</div>
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>
				{product.characteristics.map(char => (
					<div className={styles.characteristics} key={char.name}>
						<span className={styles.characteristicName}>{char.name}</span>
						<span className={styles.characteristicDots}></span>
						<span className={styles.characteristicValue}>{char.value}</span>
					</div>
				))}
			</div>
			<div className={styles.advBlock}>
				{product.advantages && (
					<div className={styles.advantages}>
						<div className={styles.advTitle}>Advantages</div>
						{product.advantages}
					</div>
				)}
				{product.disadvantages && (
					<div className={styles.disadvantages}>
						<div>Disadvantages</div>
						{product.disadvantages}
					</div>
				)}
			</div>
			<Divider className={styles.hline} />
			<div className={styles.actions}>
				<Button appearance='primary'>Show more</Button>
				<Button
					appearance='ghost'
					arrow='right'
					className={styles.reviewButton}
				>
					Reviews
				</Button>
			</div>
		</Card>
	);
};

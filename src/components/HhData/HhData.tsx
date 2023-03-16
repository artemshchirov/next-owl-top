import { priceRu } from "../../helpers/helpers";
import { Card } from "../Card/Card";
import styles from "./HhData.module.css";
import { HhDataProps } from "./HhDataProps.props";
import ReactIcon from "./rate.svg";

export const HhData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>All jobs</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Junior</div>
					<div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={styles.rate}>
						<ReactIcon className={styles.filled} />
						<ReactIcon />
						<ReactIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Middle</div>
					<div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={styles.rate}>
						<ReactIcon className={styles.filled} />
						<ReactIcon className={styles.filled} />
						<ReactIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Senior</div>
					<div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={styles.rate}>
						<ReactIcon className={styles.filled} />
						<ReactIcon className={styles.filled} />
						<ReactIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};

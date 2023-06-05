import styles from '../styles/Card.module.css'
import Link from 'next/link';

interface Props {
	title: string;
	description: string;
	link: string;
}

export default function Card({ title, description, link }: Props){
	return (
		<Link href={link} style={{ textDecoration: 'none' }}>
			<div className={styles.card}>
				<div className={styles.card_content}>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	);
};


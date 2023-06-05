import styles from '@/styles/Home.module.css'
import { tools } from '@/constants'
import Card from '@/components/Card';

export const metadata = {
    title: 'Toolbox Home',
    description: 'Home page',
};

export default function Home() {
    return(
        <div className={styles.parent}>
            <h1>Dashboard</h1>
            <div className={styles.cards}>
                {tools.map((tool) => (
                    <div className=''>
                        <Card title={tool.name} description={tool.description} link={tool.link}/>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}
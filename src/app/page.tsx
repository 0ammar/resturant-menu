import Link from 'next/link';
import styles from './page.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Our Restaurant</h1>
        <p className={styles.subtitle}>Discover our delicious menu</p>
        <Link href="/menu" className={styles.btn}>
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
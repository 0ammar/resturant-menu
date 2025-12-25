import styles from "./LoadingSkeleton.module.scss";

type Props = {
  itemsCount?: number;
  chipsCount?: number;
};

export default function LoadingSkeleton({ itemsCount = 8, chipsCount = 6 }: Props) {
  return (
    <div className={styles.wrapper} aria-busy="true" aria-label="Loading menu">
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          {Array.from({ length: chipsCount }).map((_, i) => (
            <div key={i} className={styles.chip} />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {Array.from({ length: itemsCount }).map((_, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 50}ms` }}>
              <div className={styles.imageBox} />
              <div className={styles.content}>
                <div className={`${styles.block} ${styles.title}`} />
                <div className={`${styles.block} ${styles.line1}`} />
                <div className={`${styles.block} ${styles.line2}`} />
                <div className={`${styles.block} ${styles.price}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
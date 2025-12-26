import styles from "./LoadingSkeleton.module.scss";

type Props = {
  itemsCount?: number;
  chipsCount?: number;
};

export default function LoadingSkeleton({ itemsCount = 8, chipsCount = 6 }: Props) {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.nav} aria-label="Loading categories">
          {Array.from({ length: chipsCount }).map((_, i) => (
            <div key={i} className={styles.chip}>
              <span style={{ opacity: 0 }}>Category</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid} aria-busy="true" aria-label="Loading menu items">
          {Array.from({ length: itemsCount }).map((_, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 50}ms` }}>
              <div className={styles.imageBox} />
              <div className={styles.content}>
                <div className={`${styles.block} ${styles.title}`} />
                <div className={`${styles.block} ${styles.line1}`} />
                <div className={`${styles.block} ${styles.line2}`} />
                <div className={styles.price}>
                  <span style={{ opacity: 0, fontSize: 'clamp(0.875rem, 1.8vw, 1rem)', fontWeight: 800 }}>$0.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
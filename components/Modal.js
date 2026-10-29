import styles from "./Modal.module.css";

export default function Modal({
  showSeparator = true,
  isOpen = false,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hicks-law-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>
        {showSeparator ? (
          <span className={styles.separator} aria-hidden="true" />
        ) : null}
        <h2 id="hicks-law-title" className={styles.title}>
          Hick&apos;s Law
        </h2>
        <p className={styles.text}>
          Jo flere valgmuligheder, jo længere tid tager det at vælge.
        </p>
      </div>
    </div>
  );
}

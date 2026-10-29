import styles from "./Pill.module.css";

export default function Pill({
  type = "primary",
  state = "default",
  onClick,
  children,
}) {
  const isPrimary = type === "primary";
  const isHover = state === "hover";

  return (
    <button
      type="button"
      className={`${styles.pill} ${isPrimary ? styles.primary : styles.secondary} ${
        isHover ? styles.hover : ""
      }`}
      onClick={onClick}
    >
      {children ?? (isPrimary ? "Primary" : "Secondary")}
    </button>
  );
}

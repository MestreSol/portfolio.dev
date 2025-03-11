import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Portfy. Todos os direitos reservados.</p>
      <p>
        <a
          href="https://github.com/mestresol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Big O
        </a>
      </p>
    </footer>
  );
}

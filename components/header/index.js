import Ad from './Ad.js';
import Top from './Top.js';
import styles from './styles.module.scss';
function Header() {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
    </header>
  );
}
export default Header;

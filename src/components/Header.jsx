import styles from '@/styles/Header.module.css';
const Header = (props) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      {props.children}
    </header>
  );
};
export default Header;

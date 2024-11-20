import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
};
export default Layout;

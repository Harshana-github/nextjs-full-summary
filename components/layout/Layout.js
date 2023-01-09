import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation /> 
      <main className={classes.main}>{props.children}</main> 
    </div>
  );
}

export default Layout;

// To take what's between the opening and closing layout text 
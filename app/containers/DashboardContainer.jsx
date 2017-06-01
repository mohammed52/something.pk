import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import styles from '../css/components/dashboard';

// const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const DashboardContainer = ({children}) => {
  return (
    <div>
      <div className="container-fluid">
        Welcome to the Dasboard. Stay tuned-1=2..
      </div>
      {children}
    </div>
  );
};

export default DashboardContainer;

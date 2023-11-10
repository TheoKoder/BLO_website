import LeftFooter from "./footer"
import Header from "./Header"
import PropTypes from 'prop-types';

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function MainLayout({ children}) {
return (
    <div>
    <Header />
    {children}
    <LeftFooter />
    </div>
);
}

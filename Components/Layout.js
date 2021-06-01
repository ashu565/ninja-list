import Navbar from "./navbar";
import Footer from "./Footer";
export default function Layout(props) {
  return (
    <div className="content">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

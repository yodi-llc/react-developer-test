import Head from "../components/head";
import Nav from "../components/nav";
import Movies from '../components/movie';
import Styles from "../atoms/styles";
import { Page } from "../atoms";
/**
 * Build a movie gallery app that renders data from the endpoint to be provided.
 *
 */

export default class MovieGallery extends React.Component {
  render() {
    return (
      <Page>
        <Head title="Home" />
        <Nav />
        <div className="hero">
          <h1 className="title">Movies</h1>
          <p className="description">View our latest Releases</p>
          {/* <Movies /> */}
        </div>
        <Styles />
      </Page>
    );
  }
}

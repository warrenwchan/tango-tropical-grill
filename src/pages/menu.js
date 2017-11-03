import React, {Component} from 'react';
import './styles.scss';
import pdf from './../assets/dine-in-menus.pdf';
import client from '../data/contentful';
import { Document, Page } from 'react-pdf/build/entry.webpack';

class Menu extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  // componentDidMount() {
  //   this.getPDF('tBPvbccJAkaMEe4eqkKUM')
  //   console.log(this.state.pdf)
  // }

  // getPDF(PDFId) {
  //   client.getAsset(PDFId)
  //   .then(asset => {
  //     const pdfURL = asset.fields.file.url
  //     this.setState({pdf: pdfURL})
  //   })
  //   .catch(console.error)
  // }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={pdf}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default Menu;

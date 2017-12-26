import React, { Component } from 'react'
import PropTypes from 'prop-types'
let classNames = require('classnames');


class MultiDownload extends Component {
   constructor(props) {
    super(props)
    this.state = {
      showDownloadButton: false,
    }
  }

   static propTypes = {
    files: PropTypes.array, 
    downloadTitle: PropTypes.string, 
    btnClassName: PropTypes.string,
    ctrClassName: PropTypes.string
   }

   static defaultProps = {
    files: [], 
    btnClassName: '',
    ctrClassName: '',
    downloadTitle: 'Download'
   }

  componentWillReceiveProps(nextProps) {
    if(nextProps.files.length >= 1) {
      this.setState({showDownloadButton: true})
    }
    else {
      this.setState({showDownloadButton: false})
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.files.length !== nextProps.files.length
  }

  saveAs(urls) {
    // from http://stackoverflow.com/questions/283956/
    let delayTime = 10
    urls.forEach((u) => {
      setTimeout(() => {
        let link = document.createElement('a');
        link.download = '';
        link.href = u;
        link.dispatchEvent(new MouseEvent('click'))
      }, 100 * ++delayTime)
    })
}

  render() {
    let btnClassNames = classNames('btn', 'btn-primary', this.props.btnClassName) 
    let ctrClassNames = classNames('download-button-container', this.props.ctrClassName) 
    const ctnStyle = {
      textAlign: 'center',
      margin: "0 auto"
    };
    return (
        <div className={ctrClassNames} style={ctnStyle}>
          {
            this.state.showDownloadButton ?
              <button id="download-btn"
                className={btnClassNames}
                onClick={() => {
                  this.saveAs(this.props.files)
                }}
                aria-hidden="true"
                data-files="">{this.props.downloadTitle}</button> : null
          }
        </div>

    )
  }
}

export default MultiDownload

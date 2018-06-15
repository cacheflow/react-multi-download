'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classNames = require('classnames');

var MultiDownload = function (_Component) {
  _inherits(MultiDownload, _Component);

  function MultiDownload(props) {
    _classCallCheck(this, MultiDownload);

    var _this = _possibleConstructorReturn(this, (MultiDownload.__proto__ || Object.getPrototypeOf(MultiDownload)).call(this, props));

    _this.state = {
      showDownloadButton: false
    };
    return _this;
  }

  _createClass(MultiDownload, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.files.length >= 1) {
        this.setState({ showDownloadButton: true });
      } else {
        this.setState({ showDownloadButton: false });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.files.length !== nextProps.files.length;
    }
  }, {
    key: 'saveAs',
    value: function saveAs(urls) {
      // from http://stackoverflow.com/questions/283956/
      var delayTime = 10;
      urls.forEach(function (u) {
        setTimeout(function () {
          var link = document.createElement('a');
          link.download = '';
          link.href = u;
          link.dispatchEvent(new MouseEvent('click'));
        }, 100 * ++delayTime);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var btnClassNames = classNames('btn', 'btn-primary', this.props.btnClassName);
      var ctrClassNames = classNames('download-button-container', this.props.ctrClassName);
      var ctnStyle = {
        textAlign: 'center',
        margin: "0 auto"
      };
      return _react2.default.createElement(
        'div',
        { className: ctrClassNames, style: ctnStyle },
        this.state.showDownloadButton ? _react2.default.createElement(
          'button',
          { id: 'download-btn',
            className: btnClassNames,
            onClick: function onClick() {
              _this2.saveAs(_this2.props.files);
            },
            'aria-hidden': 'true',
            'data-files': '' },
          this.props.downloadTitle
        ) : null
      );
    }
  }]);

  return MultiDownload;
}(_react.Component);

MultiDownload.propTypes = {
  files: _propTypes2.default.array,
  downloadTitle: _propTypes2.default.string,
  btnClassName: _propTypes2.default.string,
  ctrClassName: _propTypes2.default.string
};
MultiDownload.defaultProps = {
  files: [],
  btnClassName: '',
  ctrClassName: '',
  downloadTitle: 'Download'
};
exports.default = MultiDownload;
//# sourceMappingURL=index.js.map
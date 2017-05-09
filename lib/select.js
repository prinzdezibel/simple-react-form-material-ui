'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _simpleReactForm = require('simple-react-form');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = _extends({}, _simpleReactForm.FieldType.propTypes, {
  /**
   * Optional default value.
   */
  defaultValue: _react2.default.PropTypes.string,
  /**
   * The options for the select input. Each item must have label and value.
   */
  options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string.isRequired,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired
  }))
});

var defaultProps = {};

var SelectComponent = function (_React$Component) {
  _inherits(SelectComponent, _React$Component);

  function SelectComponent(props) {
    _classCallCheck(this, SelectComponent);

    var _this = _possibleConstructorReturn(this, (SelectComponent.__proto__ || Object.getPrototypeOf(SelectComponent)).call(this, props));

    _this._options = _this._getOptions();
    _this._menuItems = _this._options.map(function (item) {
      return _react2.default.createElement(_MenuItem2.default, { key: item.value, value: String(item.value), primaryText: item.label, onTouchTap: function onTouchTap(value) {
          return props.onChange(item.value);
        } });
    });
    return _this;
  }

  _createClass(SelectComponent, [{
    key: '_getOptions',
    value: function _getOptions() {
      if (this.props.options) {
        return this.props.options;
      } else if (this.props.fieldSchema.allowedValues) {
        return _underscore2.default.map(this.props.fieldSchema.allowedValues, function (allowedValue) {
          return {
            label: allowedValue,
            value: allowedValue
          };
        });
      } else {
        throw new Error('You must set the options for the select field');
      }
    }
  }, {
    key: '_getDefaultValue',
    value: function _getDefaultValue() {
      if (this.props.defaultValue) {
        return this.props.defaultValue;
      } else if (this.props.fieldSchema && this.props.fieldSchema.defaultValue) {
        return this.props.fieldSchema.defaultValue;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.value) {
        this.props.onChange(this._getDefaultValue());
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _SelectField2.default,
        _extends({
          value: String(this.props.value),
          defaultValue: this._getDefaultValue(),
          fullWidth: true,
          disabled: this.props.disabled,
          floatingLabelText: this.props.label,
          errorText: this.props.errorMessage
        }, this.props.passProps),
        this._menuItems
      );
    }
  }]);

  return SelectComponent;
}(_react2.default.Component);

exports.default = SelectComponent;


SelectComponent.propTypes = propTypes;
SelectComponent.defaultProps = defaultProps;

(0, _simpleReactForm.registerType)({
  type: 'select',
  component: SelectComponent
});
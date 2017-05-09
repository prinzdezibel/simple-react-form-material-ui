'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _simpleReactForm = require('simple-react-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = _extends({}, _simpleReactForm.FieldType.propTypes, {
  changeOnKeyDown: _react2.default.PropTypes.bool,
  fieldType: _react2.default.PropTypes.string
});

var defaultProps = {
  changeOnKeyDown: false
};

var TextFieldComponent = function (_React$Component) {
  _inherits(TextFieldComponent, _React$Component);

  function TextFieldComponent(props) {
    _classCallCheck(this, TextFieldComponent);

    var _this = _possibleConstructorReturn(this, (TextFieldComponent.__proto__ || Object.getPrototypeOf(TextFieldComponent)).call(this, props));

    _this.state = { value: props.value };
    return _this;
  }

  _createClass(TextFieldComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.keyCode === 13) {
        this.props.onChange(event.target.value);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur();
      }
      this.props.onChange(this.state.value);
    }
  }, {
    key: '_isNumberType',
    value: function _isNumberType() {
      if (this.props.fieldSchema) {
        return this.props.fieldSchema.type === Number;
      }
      if (this.props.fieldType === 'number') {
        return true;
      }
      if (this.type === 'number') {
        return true;
      }
      return false;
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var value = this._isNumberType() ? Number(event.target.value) : event.target.value;
      this.setState({ value: value });
      if (this.props.changeOnKeyDown) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var fieldType = this.props.fieldType || this.type || 'text';
      return _react2.default.createElement(_TextField2.default, _extends({
        ref: 'input',
        fullWidth: true,
        value: this.state.value || '',
        type: fieldType,
        floatingLabelText: this.props.useHint ? null : this.props.label,
        hintText: this.props.useHint ? this.props.label : null,
        errorText: this.props.errorMessage,
        disabled: this.props.disabled,
        onChange: this.onChange.bind(this),
        onKeyDown: this.onKeyDown.bind(this),
        onBlur: this.onBlur.bind(this)
      }, this.props.passProps));
    }
  }]);

  return TextFieldComponent;
}(_react2.default.Component);

exports.default = TextFieldComponent;


TextFieldComponent.propTypes = propTypes;
TextFieldComponent.defaultProps = defaultProps;

(0, _simpleReactForm.registerType)({
  type: 'text',
  component: TextFieldComponent
});

var StringFieldComponent = function (_TextFieldComponent) {
  _inherits(StringFieldComponent, _TextFieldComponent);

  function StringFieldComponent(props) {
    _classCallCheck(this, StringFieldComponent);

    var _this2 = _possibleConstructorReturn(this, (StringFieldComponent.__proto__ || Object.getPrototypeOf(StringFieldComponent)).call(this, props));

    _this2.type = 'text';
    return _this2;
  }

  return StringFieldComponent;
}(TextFieldComponent);

(0, _simpleReactForm.registerType)({
  type: 'string',
  component: StringFieldComponent
});

var NumberFieldComponent = function (_TextFieldComponent2) {
  _inherits(NumberFieldComponent, _TextFieldComponent2);

  function NumberFieldComponent(props) {
    _classCallCheck(this, NumberFieldComponent);

    var _this3 = _possibleConstructorReturn(this, (NumberFieldComponent.__proto__ || Object.getPrototypeOf(NumberFieldComponent)).call(this, props));

    _this3.type = 'number';
    return _this3;
  }

  return NumberFieldComponent;
}(TextFieldComponent);

(0, _simpleReactForm.registerType)({
  type: 'number',
  component: NumberFieldComponent
});

var DateFieldComponent = function (_TextFieldComponent3) {
  _inherits(DateFieldComponent, _TextFieldComponent3);

  function DateFieldComponent(props) {
    _classCallCheck(this, DateFieldComponent);

    var _this4 = _possibleConstructorReturn(this, (DateFieldComponent.__proto__ || Object.getPrototypeOf(DateFieldComponent)).call(this, props));

    _this4.type = 'date';
    return _this4;
  }

  return DateFieldComponent;
}(TextFieldComponent);

(0, _simpleReactForm.registerType)({
  type: 'date',
  component: DateFieldComponent
});
'use strict';exports.__esModule=true;var _dec,_class,_class2,_temp;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);var _FieldWrapper=require('./common/FieldWrapper');var _FieldWrapper2=_interopRequireDefault(_FieldWrapper);var _FieldMixin=require('./common/FieldMixin');var _FieldMixin2=_interopRequireDefault(_FieldMixin);require('../styles/TextInput.css');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TextInput=(_dec=_reactMixin2.default.decorate(_FieldMixin2.default),_dec(_class=(_temp=_class2=function(_React$Component){_inherits(TextInput,_React$Component);function TextInput(){_classCallCheck(this,TextInput);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}TextInput.prototype.componentWillMount=function componentWillMount(){var value=this.props.value;this.initField({hasDefaultValue:value.length!=0});};TextInput.prototype.shouldComponentUpdate=function shouldComponentUpdate(_nextState,_nextProps,nextContext){return this.shouldUpdate(nextContext);};TextInput.prototype.onChange=function onChange(_ref){var target=_ref.target;this.setField({value:target.value});};TextInput.prototype.render=function render(){var _props=this.props;var required=_props.required;var placeholder=_props.placeholder;var label=_props.label;var name=_props.name;var field=this.getField();return _react2.default.createElement(_FieldWrapper2.default,{error:field.error,displayError:field.displayError,required:required,label:label,className:'forms-text-input'},_react2.default.createElement('input',{type:'text',ref:this.setRef.bind(this),name:name,value:this.getValue(),placeholder:placeholder,onChange:this.onChange.bind(this),onBlur:this.setHasBeenTouched.bind(this),className:'forms-text-input-input'}));};return TextInput;}(_react2.default.Component),_class2.propTypes={intervalCheck:_react.PropTypes.number,name:_react.PropTypes.string.isRequired,label:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.element]),placeholder:_react.PropTypes.string,required:_react.PropTypes.bool,validator:_react.PropTypes.func,value:_react.PropTypes.string},_class2.defaultProps={placeholder:'',value:'',required:false},_temp))||_class);exports.default=TextInput;module.exports=exports['default'];
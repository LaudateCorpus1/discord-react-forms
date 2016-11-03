'use strict';exports.__esModule=true;var _dec,_class,_class2,_temp;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactMixin=require('react-mixin');var _reactMixin2=_interopRequireDefault(_reactMixin);var _FieldMixin=require('./common/FieldMixin');var _FieldMixin2=_interopRequireDefault(_FieldMixin);var _FieldWrapper=require('./common/FieldWrapper');var _FieldWrapper2=_interopRequireDefault(_FieldWrapper);require('../styles/RadioGroup.css');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var RadioGroup=(_dec=_reactMixin2.default.decorate(_FieldMixin2.default),_dec(_class=(_temp=_class2=function(_React$Component){_inherits(RadioGroup,_React$Component);function RadioGroup(){_classCallCheck(this,RadioGroup);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}RadioGroup.prototype.componentWillMount=function componentWillMount(){this.initField();};RadioGroup.prototype.shouldComponentUpdate=function shouldComponentUpdate(_nextState,_nextProps,nextContext){return this.shouldUpdate(nextContext);};RadioGroup.prototype.onChange=function onChange(value){this.setField({value:value,hasBeenTouched:true});};RadioGroup.prototype.render=function render(){var _this2=this;var _props=this.props;var options=_props.options;var label=_props.label;var required=_props.required;var field=this.getField();var value=this.getValue();var radios=options.map(function(option,i){var onChange=_this2.onChange.bind(_this2,option.value);return _react2.default.createElement('div',{key:'radio-option-'+i},_react2.default.createElement('input',{type:'radio',checked:value==option.value,onChange:onChange}),_react2.default.createElement('label',{onClick:onChange},option.label));});return _react2.default.createElement(_FieldWrapper2.default,{error:field.error,required:required,label:label,displayError:field.displayError,className:'forms-radio-group'},radios);};return RadioGroup;}(_react2.default.Component),_class2.propTypes={name:_react.PropTypes.string.isRequired,options:_react.PropTypes.array.isRequired,label:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.element]),required:_react.PropTypes.bool,validator:_react.PropTypes.func,value:_react.PropTypes.string},_class2.defaultProps={value:'',required:false},_temp))||_class);exports.default=RadioGroup;module.exports=exports['default'];
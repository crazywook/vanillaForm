/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/example/limitConfig/index.js":
/*!******************************************!*\
  !*** ./src/example/limitConfig/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_formComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/formComponent */ \"./src/lib/formComponent/index.js\");\n/* harmony import */ var _lib_transformer_valueTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/transformer/valueTransformer */ \"./src/lib/transformer/valueTransformer.js\");\n\n\n_lib_transformer_valueTransformer__WEBPACK_IMPORTED_MODULE_1__[\"Currency\"];\n_lib_formComponent__WEBPACK_IMPORTED_MODULE_0__[\"FormComponent\"];\n\n/**\n * @typedef {{\n *  url: string\n    method: string\n    formId: string\n    enctype: string\n    data: {}\n    alert: string\n    loading: boolean // ( blockUI 유지 여부)\n    isAsync: boolean\n    cache: boolean\n    processData: boolean\n    redirect: string\n    reload: boolean\n * }} AjaxOption\n */\n\n/**\n * @typedef {{\n *    allAjax: (\n *      options: AjaxOption\n *      succCb: (data, status: number, jqXHR) => void\n *      failCb: (jqXHR) => void) => void\n *    ) => false\n * }} F2bCommon\n */\n\n/**\n * \n * @typedef {{\n *  formName: string\n *  submitUrl: string\n *  state: {}\n *  stateType: {}\n * }} FormMeta \n */\n\n/**\n * @param {FormMeta} formMeta\n */\nfunction LimitConfig(formMeta) {\n\n  _lib_formComponent__WEBPACK_IMPORTED_MODULE_0__[\"FormComponent\"].prototype.constructor.call(this, formMeta);\n}\n\nObject.setPrototypeOf(LimitConfig.prototype, _lib_formComponent__WEBPACK_IMPORTED_MODULE_0__[\"FormComponent\"].prototype);\n\nLimitConfig.prototype.renderData = function renderData(state) {\n\n};\n\nnew LimitConfig({\n  formName: 'limitConfigForm',\n  state: {\n    properEstimatedBorrowingAmt: null,\n    properInterestLiability: null,\n    noneInterestLiability: null,\n    salesActivityCashFlow: null,\n    properInterestCompensationMagnification: null,\n    properBorrowingInterestRate: null,\n    paymentGuaranteeBalancePastYear: null,\n    totalCreditExposureAmt: null,\n    bankCreditExposureAmt: null,\n    insuranceCreditExposureAmt: null,\n    specialFinancingCreditExposure: null,\n    YJCreditExposure: null,\n    otherCreditExposure: null,\n    borrowingCapacity: null,\n    sellerApDiscountDemandEstimateAmt: null,\n    buyerFundingCapacityEstimateAmt: null,\n    limitAmt: null\n  },\n  stateType: {\n    bankCreditExposureAmt: _lib_transformer_valueTransformer__WEBPACK_IMPORTED_MODULE_1__[\"Currency\"]\n  }\n});\n\nfunction LimitInputs(fieldIds) {\n\n  if (!(this instanceof LimitInputs)) {\n    throw new Error('This must be instantiated by New');\n  }\n\n  var _this = this;\n\n  fieldIds.forEach(function (id) {\n\n    _this[id] = qs('#' + id);\n    if (!_this[id]) {\n      throw new Error(id + ' field does not exist');\n    }\n  });\n}\n\n/**\n * @param {F2bCommon} common // F2B.common\n * @parma {jQuery} $\n */\nfunction initLimitConfig(common) {\n\n  var promiseAllAjax = common.promiseAllAjax;\n  var customSwal = common.customSwal;\n\n\t/**\n   * \n   */\n  var limitConfigValues = {\n    properEstimatedBorrowingAmt: null,\n    properInterestLiability: null,\n    noneInterestLiability: null,\n    salesActivityCashFlow: null,\n    properInterestCompensationMagnification: null,\n    properBorrowingInterestRate: null,\n    paymentGuaranteeBalancePastYear: null,\n    totalCreditExposureAmt: null,\n    bankCreditExposureAmt: null,\n    insuranceCreditExposureAmt: null,\n    specialFinancingCreditExposure: null,\n    YJCreditExposure: null,\n    otherCreditExposure: null,\n    borrowingCapacity: null,\n    sellerApDiscountDemandEstimateAmt: null,\n    buyerFundingCapacityEstimateAmt: null,\n    limitAmt: null\n  };\n\n  var fieldIds = Object.keys(limitConfigValues);\n  var limitInputs = new LimitInputs(fieldIds);\n  setState(limitConfigValues, limitInputs);\n\n  var limitConfigForm = qs('#limitConfigForm');\n  limitConfigForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n  });\n  limitConfigForm.addEventListener('keydown', function (e) {\n\n    if (!(/[.]/.test(e.target.value)) && e.key === '.') {\n      return;\n    }\n    if (!isNaN(e.key) || e.key.length !== 1) {\n      return;\n    }\n    e.preventDefault();\n  });\n\n  limitConfigForm.addEventListener('keyup', function (e) {\n\n    var escapeValue = e.target.value.replace(/[^(\\d.)]/g, '');\n    limitConfigValues[e.target.id] = Number(escapeValue);\n    // 동일 데이터가 반복 표시 되는 것은 따로 처리 => displaySameLimitConfigData\n    limitConfigValues = calculateLimitConfig(limitConfigValues);\n    bindCalculation(limitInputs, limitConfigValues);\n    displaySameLimitConfigData(limitInputs);\n  });\n\n  function displaySameLimitConfigData(forms) {\n    qs('#properInterestLiability2').innerHTML = forms.properInterestLiability.innerHTML;\n    qs('#noneInterestLiability2').innerHTML = forms.noneInterestLiability.innerHTML;\n  }\n\n  function requestToUpdateLimitConfig(options, succCb) {\n\n    var ajaxOptions = {\n      data: options.data,\n      formId: options.formId,\n      url: '/admin/buyer/ledger/limit',\n      method: 'POST',\n      alert: true\n    };\n\n    return promiseAllAjax(ajaxOptions, succCb);\n  }\n\n  function handleLimitSave() {\n\n    var options = {\n      data: {\n        buyerLimitConfig: {\n          ...limitConfigValues,\n          buyerSid: qs('#buyerSid').value\n        }\n      }\n    };\n\n    requestToUpdateLimitConfig(options).then(function (data) {\n\n      customSwal({\n        text: data.result ? data.result.message : '',\n        type: 'success'\n      });\n    });\n  }\n\n\t/**\n   * 한도설정 저장버튼 Event\n   */\n  qs('#limitSaveBtn').addEventListener('click', handleLimitSave);\n  setLimitConfigEditable(limitInputs, false);\n  addBuyerLimitConfigEditBtnEvent(limitInputs);\n  // var limitFormData = new FormData(limitConfigForm);\n}\n\n/**\n * @param {LimitInputs} forms\n * @param {{}} values\n */\nfunction bindCalculation(forms, limitConfig) {\n  if (!(forms instanceof LimitInputs)) {\n    throw new Error('forms must be LimitInputs');\n  }\n\n  forms.salesActivityCashFlow.value = limitConfig.salesActivityCashFlow.toLocaleString();\n  forms.properInterestLiability.innerText = limitConfig.properInterestLiability.toLocaleString();\n  forms.noneInterestLiability.innerText = limitConfig.noneInterestLiability.toLocaleString();\n  forms.properEstimatedBorrowingAmt.innerText = limitConfig.properEstimatedBorrowingAmt.toLocaleString();\n  forms.paymentGuaranteeBalancePastYear.value = limitConfig.paymentGuaranteeBalancePastYear.toLocaleString();\n  forms.noneInterestLiability.innerText = limitConfig.paymentGuaranteeBalancePastYear.toLocaleString();\n\n  forms.bankCreditExposureAmt.value = limitConfig.bankCreditExposureAmt.toLocaleString();\n  forms.insuranceCreditExposureAmt.value = limitConfig.insuranceCreditExposureAmt.toLocaleString();\n  forms.specialFinancingCreditExposure.value = limitConfig.specialFinancingCreditExposure.toLocaleString();\n  forms.YJCreditExposure.value = limitConfig.YJCreditExposure.toLocaleString();\n  forms.otherCreditExposure.value = limitConfig.otherCreditExposure.toLocaleString();\n  forms.totalCreditExposureAmt.innerText = limitConfig.totalCreditExposureAmt.toLocaleString();\n\n  forms.borrowingCapacity.innerText = limitConfig.borrowingCapacity.toLocaleString();\n  forms.sellerApDiscountDemandEstimateAmt.value = limitConfig.sellerApDiscountDemandEstimateAmt.toLocaleString();\n  forms.buyerFundingCapacityEstimateAmt.value = limitConfig.buyerFundingCapacityEstimateAmt.toLocaleString();\n  forms.limitAmt.innerText = limitConfig.limitAmt ? limitConfig.limitAmt.toLocaleString() : '';\n}\n\n/**\n * @param {{ salesActivityCashFlow, properInterestLiability,\n *    noneInterestLiability, properEstimatedBorrowingAmt,\n *    paymentGuaranteeBalancePastYear, bankCreditExposureAmt, insuranceCreditExposureAmt,\n *    specialFinancingCreditExposure, YJCreditExposure, otherCreditExposure,\n *    totalCreditExposureAmt, borrowingCapacity,\n *    sellerApDiscountDemandEstimateAmt, buyerFundingCapacityEstimateAmt, limitAmt\n *  }} values \n */\nfunction calculateLimitConfig(values) {\n  var salesActivityCashFlow = values.salesActivityCashFlow || 0;\n  var properInterestCompensationMagnification = values.properInterestCompensationMagnification || 0;\n  var properBorrowingInterestRate = values.properBorrowingInterestRate || 0;\n  var properInterestLiability = salesActivityCashFlow * properInterestCompensationMagnification * properBorrowingInterestRate / 100;\n  var paymentGuaranteeBalancePastYear = values.paymentGuaranteeBalancePastYear || 0;\n  var noneInterestLiability = paymentGuaranteeBalancePastYear;\n  var properEstimatedBorrowingAmt = properInterestLiability + noneInterestLiability;\n  var bankCreditExposureAmt = values.bankCreditExposureAmt || 0;\n  var insuranceCreditExposureAmt = values.insuranceCreditExposureAmt || 0;\n  var specialFinancingCreditExposure = values.specialFinancingCreditExposure || 0;\n  var YJCreditExposure = values.YJCreditExposure || 0;\n  var otherCreditExposure = values.otherCreditExposure || 0;\n  var totalCreditExposureAmt = +bankCreditExposureAmt\n    + insuranceCreditExposureAmt\n    + specialFinancingCreditExposure\n    + YJCreditExposure\n    + otherCreditExposure;\n  var borrowingCapacity = properEstimatedBorrowingAmt - totalCreditExposureAmt;\n  var sellerApDiscountDemandEstimateAmt = values.sellerApDiscountDemandEstimateAmt || 0;\n  var buyerFundingCapacityEstimateAmt = values.buyerFundingCapacityEstimateAmt || 0;\n  var limitAmtCandidates = [\n    borrowingCapacity,\n    sellerApDiscountDemandEstimateAmt,\n    buyerFundingCapacityEstimateAmt,\n  ];\n  var limitAmt = pickLimitAmt(limitAmtCandidates);\n  return {\n    salesActivityCashFlow,\n    properBorrowingInterestRate,\n    properInterestCompensationMagnification,\n    properInterestLiability,\n    noneInterestLiability,\n    properEstimatedBorrowingAmt,\n    paymentGuaranteeBalancePastYear,\n    bankCreditExposureAmt,\n    insuranceCreditExposureAmt,\n    specialFinancingCreditExposure,\n    YJCreditExposure,\n    otherCreditExposure,\n    totalCreditExposureAmt,\n    borrowingCapacity,\n    sellerApDiscountDemandEstimateAmt,\n    buyerFundingCapacityEstimateAmt,\n    limitAmt\n  };\n}\n\n/**\n * @param {Array} limitAmtCandidates \n * @returns {number | undefined}\n */\nfunction pickLimitAmt(limitAmtCandidates) {\n\n  var filteredCandidates = limitAmtCandidates.filter(d => d);\n  if (!filteredCandidates.length) {\n    return;\n  }\n  var min = filteredCandidates[0];\n  for (var i = 1; i < filteredCandidates.length; i++) {\n\n    if (filteredCandidates[i] < min) {\n      min = filteredCandidates[i];\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack:///./src/example/limitConfig/index.js?");

/***/ }),

/***/ "./src/lib/formComponent/index.js":
/*!****************************************!*\
  !*** ./src/lib/formComponent/index.js ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormComponent\", function() { return FormComponent; });\nvar wrapFetch = {\n  request: function (url, options) {\n    var baseUrl = \"http://localhost:3000\";\n    var fullUrl = baseUrl + url;\n    if (options.body && options.method === 'POST') {\n      options.body = JSON.stringify(options.body);\n    }\n\n    return fetch(\n      fullUrl,\n      options\n    ).then(r => {\n    });\n  },\n  post: function (url, data) {\n    return this.request(\n      url,\n      {\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        credentials: 'include',\n        withCredentials: true,\n        method: 'POST',\n        body: data\n      }\n    );\n  },\n  get: function (url) {\n    return this.request(\n      url,\n      {\n        method: 'GET'\n      }\n    );\n  }\n};\n\nfunction promiseAllAjaxAdaptor(url, options) {\n\n  return window.F2B.common.promiseAllAjax({\n    url: url,\n    method: options.method,\n    data: options.body\n  });\n}\n\n/**\n * \n * @typedef {{\n *  formName: string\n *  submitUrl: string\n *  state: {}\n *  stateType: {}\n * }} FormMeta \n */\n\n/**\n * @param {FormMeta} formMeta\n * @param {{}} state\n */\nfunction FormComponent(formMeta) {\n  // eslint-disable-next-line no-use-before-define\n  var _this = this;\n  var state = formMeta.state;\n  _this.form = document[formMeta.formName];\n  if (!this) {\n    throw new Error('FormComponent must created by constructor');\n  }\n\n  if (!_this.form) {\n    throw new Error('form: ' + formMeta.formName + ' does not exist');\n  }\n\n  if (!state) {\n    throw new Error('state parameter does not exist');\n  }\n\n  console.info(formMeta.formName, 'form component will created');\n  _this.state = state;\n  _this.stateType = formMeta.stateType;\n  _this.stateKeys = Object.keys(state);\n  _this.CustomFormParser = {\n    // TODO: add custom parser\n  };\n  _this.FormParser = {\n    number: function (value) {\n      return Number(value.replace(/[^(\\d.)]/g, ''));\n    },\n    string: function (value) {\n      return String(value);\n    }\n  };\n  _this.FormatterByName = {\n\n  };\n  _this.qs = _this.form.querySelector.bind(_this.form);\n  _this.qsAll = _this.form.querySelectorAll.bind(_this.form);\n  _this.fieldElms = _this.takeFieldElms(_this.form);\n  _this.setStateByForm(_this.form);\n  _this.state = _this.calculateState(_this.state);\n  _this.renderData(_this.state);\n  _this.formState = {\n    isEditable: true\n  };\n  _this.http = {\n    request: wrapFetch.request,\n    // request: promiseAllAjaxAdaptor,\n    post: function (url, data) {\n      return this.request(\n        url,\n        {\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          credentials: 'include',\n          method: 'POST',\n          body: data\n        }\n      );\n    },\n    get: function (url) {\n      return this.request(\n        url,\n        {\n          method: 'GET'\n        }\n      );\n    }\n  };\n\n  _this.form.addEventListener('submit', function (e) {\n    console.log('submit', e);\n    e.preventDefault();\n  });\n  _this.form.addEventListener('keyup', function (e) {\n\n    e.preventDefault();\n    var stateValue = _this.parseElmValue(e.target.name, e.target.value);\n    e.target.value = _this.formatInputValue(e.target.name, e.target.value);\n    // 동일 데이터가 반복 표시 되는 것은 따로 처리 => displaySameData\n    var nextState = _this.calculateState({\n      ..._this.state,\n      [e.target.name]: stateValue,\n    });\n    _this.setState(\n      nextState,\n      function (state) {\n        _this.renderData(state);\n      }\n    );\n    // displaySameData(limitInputs);\n  });\n  _this.form.addEventListener('change', function (e) {\n\n    e.preventDefault();\n    console.log('change', e.target.value);\n    _this.state[e.target.name] = _this.parseElmValue(e.target.name, e.target.value);\n    // 동일 데이터가 반복 표시 되는 것은 따로 처리 => displaySameData\n    var nextState = _this.calculateState(_this.state);\n    _this.setState(\n      nextState,\n      function (state) {\n        _this.renderData(state);\n      }\n    );\n    // displaySameData(limitInputs);\n\n  });\n\n  _this.mount();\n}\nFormComponent.prototype.renderData = function renderData(state) {\n  console.warn('renderData was not overridden');\n  // this.stateKeys.forEach(function (key) {\n\n  // \tvar elm = this.qs('[name=' + key + ']');\n  // \tif (this.hasElmValue(elm)) {\n  // \t\telm.value = state[key];\n  // \t} else {\n  // \t\telm.innerText = state[key];\n  // \t}\n  // }.bind(this));\n};\nFormComponent.prototype.calculateState = function calculateState(state) {\n  // console.log('calculateState', state);\n  return state;\n};\nFormComponent.prototype.formatInputValue = function formatInputValue(name, value) {\n  if (this.FormatterByName[name]) {\n    return this.FormatterByName[name](value);\n  }\n  var type = this.stateType[name];\n  if (type) {\n    return type.renderState(value);\n  }\n  return value;\n};\nFormComponent.prototype.mount = function mount() {\n  console.warn('mount prototype was not implemented');\n};\n/**\n * @returns {closure}\n */\nFormComponent.prototype.getState = function getState() {\n  return Object.assign({}, this.state);\n};\n/**\n * @param {{} | Function} state\n * @param {function(state)} callback\n */\nFormComponent.prototype.setState = function setState(state, callback) {\n  this.state = state;\n  console.log('state', this.state);\n  callback && callback(state);\n};\nFormComponent.prototype.getValueByElm = function getValueByElm(elm) {\n\n  if (this.hasElmValue(elm)) {\n    return elm.value;\n  }\n  return elm.innerText;\n};\nFormComponent.prototype.hasElmValue = function hasElmValue(elm) {\n  return ['INPUT', 'SELECT'].includes(elm.nodeName.toUpperCase());\n};\nFormComponent.prototype.getStateType = function getStateType(name, value) {\n\n};\nFormComponent.prototype.parseElmValue = function parseElmValue(name, value) {\n\n  if (!this.stateType) {\n    return value;\n  }\n  var type = this.stateType[name];\n  if (!type) {\n    return value;\n  }\n  if (this.FormParser[type]) {\n    return this.FormParser[type](value);\n  }\n\n  var typeString = type.toString();\n  if (typeString.startsWith('class')) {\n    console.warn('parsing by class is not supported');\n    return value;\n  };\n  if (typeString.startsWith('function')) {\n    return type(value);\n  };\n  if (typeof type === 'object' && Object.keys(type).includes('enstate', 'renderState')) {\n    return type.enstate(value);\n  };\n  return value;\n};\nFormComponent.prototype.setStateByForm = function setStateByForm(form) {\n\n  return this.stateKeys.forEach(function (key) {\n    const elm = this.qs('[name=' + key + ']');\n    if (!elm) {\n      throw new Error('element does not have key: ' + key);\n    }\n    var elmValue = this.getValueByElm(elm);\n    this.state[key] = this.parseElmValue(key, elmValue);\n  }.bind(this));\n};\nFormComponent.prototype.setEditable = function setEditable(isEditable) {\n  Object.keys(this.form).forEach(function (id) {\n    this.form[id].disabled = isEditable ? '' : 'disabled';\n  }.bind(this));\n};\n/**\n * @returns {{}}\n */\nFormComponent.prototype.takeFieldElms = function takeFieldElms() {\n  let fieldElms = {};\n  this.qsAll('[name]').forEach(elm => {\n    fieldElms[elm.getAttribute('name')] = elm;\n  });\n  return fieldElms;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/lib/formComponent/index.js?");

/***/ }),

/***/ "./src/lib/transformer/valueTransformer.js":
/*!*************************************************!*\
  !*** ./src/lib/transformer/valueTransformer.js ***!
  \*************************************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Currency\", function() { return Currency; });\nfunction ValueTransformerInterface(value) {\n\n  this.value = value;\n}\nValueTransformerInterface.prototype.enstate = function (value) {\n  throw new Error('you should implement enstate');\n};\nValueTransformerInterface.prototype.renderState = function (value) {\n  throw new Error('you should implement enstate');\n};\nfunction _Currency(value) {\n\n  ValueTransformerInterface.prototype.constructor.call(this, value);\n}\n_Currency.prototype = Object.create(ValueTransformerInterface.prototype);\n_Currency.prototype.enstate = function (value) {\n  return Number(value.replace(/,/g, ''));\n};\n_Currency.prototype.renderState = function (value) {\n  var state = this.enstate(value);\n  return state.toLocaleString();\n};\n\nfunction createTransformer(fn) {\n\n  var instance = new fn();\n  console.log('create', instance);\n  if (!('enstate' in instance.__proto__ && 'renderState' in instance.__proto__)) {\n    throw new Error('implement parent');\n  }\n\n  return {\n    enstate: function (value) {\n      return instance.enstate(value);\n    },\n    renderState: function (value) {\n      return instance.renderState(value);\n    },\n  };\n}\n\nvar Currency = createTransformer(_Currency);\n\n\n//# sourceURL=webpack:///./src/lib/transformer/valueTransformer.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/example/limitConfig ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/example/limitConfig */\"./src/example/limitConfig/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/example/limitConfig?");

/***/ })

/******/ });
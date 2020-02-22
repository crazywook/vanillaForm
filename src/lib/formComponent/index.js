var wrapFetch = {
  request: function (url, options) {
    var baseUrl = process.env.API_BASE_URL;
    var fullUrl = baseUrl + url;
    if (options.body && options.method === 'POST') {
      options.body = JSON.stringify(options.body);
    }

    return fetch(
      fullUrl,
      options
    ).then(r => {
    });
  },
  post: function (url, data) {
    return this.request(
      url,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        withCredentials: true,
        method: 'POST',
        body: data
      }
    );
  },
  get: function (url) {
    return this.request(
      url,
      {
        method: 'GET'
      }
    );
  }
};

function promiseAllAjaxAdaptor(url, options) {

  return window.F2B.common.promiseAllAjax({
    url: url,
    method: options.method,
    data: options.body
  });
}

/**
 * 
 * @typedef {{
 *  formName: string
 *  submitUrl: string
 *  state: {}
 *  stateType: {}
 * }} FormMeta 
 */

/**
 * @param {FormMeta} formMeta
 * @param {{}} state
 */
function FormComponent(formMeta) {
  // eslint-disable-next-line no-use-before-define
  var _this = this;
  var state = formMeta.state;
  _this.form = document[formMeta.formName];
  if (!this) {
    throw new Error('FormComponent must created by constructor');
  }

  if (!_this.form) {
    throw new Error('form: ' + formMeta.formName + ' does not exist');
  }

  if (!state) {
    throw new Error('state parameter does not exist');
  }

  console.info(formMeta.formName, 'form component will created');
  _this.state = state;
  _this.stateType = formMeta.stateType;
  _this.stateKeys = Object.keys(state);
  _this.computeState = formMeta.computeState;
  _this.CustomFormParser = {
    // TODO: add custom parser
  };
  _this.FormParser = {
    number: function (value) {
      return Number(value.replace(/[^(\d.)]/g, ''));
    },
    string: function (value) {
      return String(value);
    }
  };
  _this.FormatterByName = {

  };
  _this.qs = _this.form.querySelector.bind(_this.form);
  _this.qsAll = _this.form.querySelectorAll.bind(_this.form);
  _this.fieldElms = _this.takeFieldElms(_this.form);
  _this.setStateByForm(_this.form);
  _this.state = _this.computeState(_this.state);
  _this.renderData(_this.state);
  _this.formState = {
    isEditable: true
  };
  _this.http = {
    request: wrapFetch.request,
    // request: promiseAllAjaxAdaptor,
    post: function (url, data) {
      return this.request(
        url,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          method: 'POST',
          body: data
        }
      );
    },
    get: function (url) {
      return this.request(
        url,
        {
          method: 'GET'
        }
      );
    }
  };

  _this.form.addEventListener('submit', function (e) {
    console.log('submit', e);
    e.preventDefault();
  });
  _this.form.addEventListener('keydown', function (e) {
    // e.preventDefault();
    console.log('key down', e.target.name);
  });
  _this.form.addEventListener('keyup', function (e) {
    console.log('key up', e.target.name, ':', e.target.value);
    _this.handleFormChange(e);
  });
  _this.form.addEventListener('change', function (e) {
    console.log('change', e.target.value);
    _this.handleFormChange(e);
    // displaySameData(limitInputs);
  });

  _this.mount();
}
FormComponent.prototype.handleFormChange = function handleFormChange(e) {
  var name = e.target.name;
  var value = e.target.value;
  var stateValue = this.parseElmValue(name, value);
  console.log('stateValue', stateValue);
  var formattedValue = this.formatInputValue(name, value);
  console.log('prev', this.state[name], 'curr', formattedValue);
  e.target.value = formattedValue instanceof Error
    ? this.state[name]
    : formattedValue;

  this.setState(
    {
      [name]: stateValue,
    },
    this.renderData.bind(this)
  );
  // 동일 데이터가 반복 표시 되는 것은 따로 처리 => displaySameData
  // displaySameData(limitInputs);
  e.preventDefault();
};
FormComponent.prototype.renderData = function renderData(state) {
  console.warn('renderData was not overridden');
  // this.stateKeys.forEach(function (key) {

  // 	var elm = this.qs('[name=' + key + ']');
  // 	if (this.hasElmValue(elm)) {
  // 		elm.value = state[key];
  // 	} else {
  // 		elm.innerText = state[key];
  // 	}
  // }.bind(this));
};
FormComponent.prototype.computeState = function computeState(state) {
  // console.log('computeState', state);
  return state;
};
FormComponent.prototype.formatInputValue = function formatInputValue(name, value) {
  if (this.FormatterByName[name]) {
    return this.FormatterByName[name](value);
  }
  var type = this.stateType[name];
  // console.log('value', value);
  // console.log('type', type);
  if (type) {
    return type.renderState(value);
  }
  return value;
};
FormComponent.prototype.mount = function mount() {
  console.warn('mount prototype was not implemented');
};
/**
 * @returns {closure}
 */
FormComponent.prototype.getState = function getState() {
  return Object.assign({}, this.state);
};
/**
 * @param {{} | Function} state
 * @param {function(state)} callback
 */
FormComponent.prototype.setState = function setState(state, callback) {
  this.state = this.computeState
    ? this.computeState({
      ...this.state,
      ...state
    })
    : {
      ...this.state,
      state
    };
  console.log('state', this.state);
  callback && callback(this.state);
};
FormComponent.prototype.getValueByElm = function getValueByElm(elm) {

  if (this.hasElmValue(elm)) {
    return elm.value;
  }
  return elm.innerText;
};
FormComponent.prototype.hasElmValue = function hasElmValue(elm) {
  return ['INPUT', 'SELECT'].includes(elm.nodeName.toUpperCase());
};
FormComponent.prototype.getStateType = function getStateType(name, value) {

};
FormComponent.prototype.parseElmValue = function parseElmValue(name, value) {

  if (!this.stateType) {
    return value;
  }
  var type = this.stateType[name];
  if (!type) {
    return value;
  }
  if (this.FormParser[type]) {
    return this.FormParser[type](value);
  }
  var typeString = type.toString();
  if (typeString.startsWith('class')) {
    console.warn('parsing by class is not supported');
    return value;
  };
  if (typeString.startsWith('function')) {
    return type(value);
  };
  if (typeof type === 'object' && Object.keys(type).includes('enstate', 'renderState')) {
    var enstated = type.enstate(value);
    if (enstated instanceof Error) {
      console.log('enstate error', value);
      return this.state[name];
    }
    return enstated;
  };
  return value;
};
FormComponent.prototype.setStateByForm = function setStateByForm(form) {

  return this.stateKeys.forEach(function (key) {
    const elm = this.qs('[name=' + key + ']');
    if (!elm) {
      throw new Error('element does not have key: ' + key);
    }
    var elmValue = this.getValueByElm(elm);
    this.state[key] = this.parseElmValue(key, elmValue);
  }.bind(this));
};
FormComponent.prototype.setEditable = function setEditable(isEditable) {
  Object.keys(this.form).forEach(function (id) {
    this.form[id].disabled = isEditable ? '' : 'disabled';
  }.bind(this));
};
/**
 * @returns {{}}
 */
FormComponent.prototype.takeFieldElms = function takeFieldElms() {
  let fieldElms = {};
  this.qsAll('[name]').forEach(elm => {
    fieldElms[elm.getAttribute('name')] = elm;
  });
  return fieldElms;
};

export { FormComponent };

function ValueTransformerInterface(options) {

  // TODO: create validation
  this.max = options.max;
  this.min = options.min;
}
ValueTransformerInterface.prototype.enstate = function (value) {
  throw new Error('you should implement enstate');
};
ValueTransformerInterface.prototype.renderState = function (value) {
  throw new Error('you should implement enstate');
};
ValueTransformerInterface.prototype.validate = function (value) {

};
ValueTransformerInterface.prototype.validateMaxNum = function (value) {
  if (typeof value !== 'number') {
    throw new Error(value + ' is not number.');
  }
  return value > this.max
    ? new Error(value + ' is greater than ' + this.max)
    : true;
};
ValueTransformerInterface.prototype.validateMinNum = function (value) {
  if (typeof value !== 'number') {
    throw new Error(value + ' is not number.');
  }
  return value < this.min
    ? new Error(value + ' is less than ' + this.max)
    : true;
};
ValueTransformerInterface.prototype.validateMaxLength = function (value) {
  if (typeof value !== 'string') {
    throw new Error(value + ' is not string.');
  }
  return value.length > this.max
    ? new Error(value + ' is greater than ' + this.max)
    : true;
};

function _Currency(arg) {

  let options = {};
  if (typeof arg === 'number') {
    options.max = arg;
  } else if (typeof arg === 'object') {
    options = arg;
  }

  ValueTransformerInterface.prototype.constructor.call(this, options);
}

_Currency.prototype = Object.create(ValueTransformerInterface.prototype);
_Currency.prototype.enstate = function (value) {
  if (value === '') {
    return value;
  }
  var number = Number(value.replace(/[^0-9]/g, ''));
  var validation = this.max && this.validateMaxNum(number);
  if (validation instanceof Error) {
    return validation;
  }
  return number;
};
_Currency.prototype.renderState = function (value) {
  var state = this.enstate(value);
  return state instanceof Error
    ? state
    : state.toLocaleString();
};

function createTransformerFactory(fn) {

  return function (arg) {
    var instance = new fn(arg);
    if (!('enstate' in instance.__proto__ && 'renderState' in instance.__proto__)) {
      throw new Error('implement parent');
    }
    return {
      enstate: function (value) {
        return instance.enstate(value);
      },
      renderState: function (value) {
        return instance.renderState(value);
      }
    };
  };
}

export var Currency = createTransformerFactory(_Currency);

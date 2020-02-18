function ValueTransformerInterface(value) {

  this.value = value;
}
ValueTransformerInterface.prototype.enstate = function (value) {
  throw new Error('you should implement enstate');
};
ValueTransformerInterface.prototype.renderState = function (value) {
  throw new Error('you should implement enstate');
};
function _Currency(value) {

  ValueTransformerInterface.prototype.constructor.call(this, value);
}
_Currency.prototype = Object.create(ValueTransformerInterface.prototype);
_Currency.prototype.enstate = function (value) {
  return Number(value.replace(/,/g, ''));
};
_Currency.prototype.renderState = function (value) {
  var state = this.enstate(value);
  return state.toLocaleString();
};

function createTransformer(fn) {

  var instance = new fn();
  console.log('create', instance);
  if (!('enstate' in instance.__proto__ && 'renderState' in instance.__proto__)) {
    throw new Error('implement parent');
  }

  return {
    enstate: function (value) {
      return instance.enstate(value);
    },
    renderState: function (value) {
      return instance.renderState(value);
    },
  };
}

export var Currency = createTransformer(_Currency);

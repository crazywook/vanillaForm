import { FormComponent } from '../../lib/formComponent';
import { Currency } from '../../lib/transformer/valueTransformer';

function DiscountPercent(formMeta) {

  FormComponent.prototype.constructor.call(this, formMeta);
}

DiscountPercent.prototype = Object.create(FormComponent.prototype);
DiscountPercent.prototype.renderData = function renderData(state) {

  document.querySelector('#title').innerText = 'hello ' + state.name;
};
DiscountPercent.prototype.mount = function mount() {


};

new DiscountPercent({
  formName: 'discountPercent',
  state: {
    name: null,
    salary: null
  },
  stateType: {
    salary: Currency
  }
});

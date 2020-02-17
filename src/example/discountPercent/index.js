import { FormComponent } from '../../lib/formComponent';

function DiscountPercent(formMeta) {

  var state = {
    name: null,
  };

  FormComponent.prototype.constructor.call(this, formMeta, state);
}

DiscountPercent.prototype = Object.create(FormComponent.prototype);
DiscountPercent.prototype.renderData = function renderData(state) {

  document.querySelector('#title').innerText = 'hello ' + state.name;
};

new DiscountPercent({ formName: 'discountPercent' });

import { FormComponent } from '../../lib/formComponent';
import { Currency } from '../../lib/transformer/valueTransformer';
Currency;
FormComponent;

/**
 * @typedef {{
 *  url: string
    method: string
    formId: string
    enctype: string
    data: {}
    alert: string
    loading: boolean // ( blockUI 유지 여부)
    isAsync: boolean
    cache: boolean
    processData: boolean
    redirect: string
    reload: boolean
 * }} AjaxOption
 */

/**
 * @typedef {{
 *    allAjax: (
 *      options: AjaxOption
 *      succCb: (data, status: number, jqXHR) => void
 *      failCb: (jqXHR) => void) => void
 *    ) => false
 * }} F2bCommon
 */

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
 */
function LimitConfig(formMeta) {

  FormComponent.prototype.constructor.call(this, formMeta);
}

Object.setPrototypeOf(LimitConfig.prototype, FormComponent.prototype);

LimitConfig.prototype.renderData = function renderData(state) {

  Object.keys(this.fieldElms).forEach(name => {

    var elm = this.fieldElms[name];
    var hasValue = this.hasElmValue(elm);
    var formatter = this.FormatterByName[name];
    if (!formatter && hasValue) {
      return;
    }

    var formattedValue = formatter ? formatter(this.state[name]) : this.state[name];
    !formattedValue && console.log('renderdata', name, formattedValue);
    if (hasValue) {
      elm.value = formattedValue;
    } else {
      elm.innerText = formattedValue == undefined ? '--' : formattedValue;
    }
  });
  console.log('state.properInterestLiability', state.properInterestLiability);
  this.qs('#properInterestLiability2').innerText = state.properInterestLiability;
  this.qs('#noneInterestLiability2').innerText = state.noneInterestLiability;
};

new LimitConfig({
  formName: 'limitConfigForm',
  state: {
    properEstimatedBorrowingAmt: null,
    properInterestLiability: null,
    noneInterestLiability: null,
    salesActivityCashFlow: null,
    properInterestCompensationMagnification: null,
    properBorrowingInterestRate: null,
    paymentGuaranteeBalancePastYear: null,
    totalCreditExposureAmt: null,
    bankCreditExposureAmt: null,
    insuranceCreditExposureAmt: null,
    specialFinancingCreditExposure: null,
    YJCreditExposure: null,
    otherCreditExposure: null,
    borrowingCapacity: null,
    sellerApDiscountDemandEstimateAmt: null,
    buyerFundingCapacityEstimateAmt: null,
    limitAmt: null
  },
  stateType: {
    properEstimatedBorrowingAmt: Currency(),
    properInterestLiability: Currency(),
    noneInterestLiability: Currency(),
    salesActivityCashFlow: Currency(1000),
    properInterestCompensationMagnification: Currency(),
    properBorrowingInterestRate: Currency(),
    paymentGuaranteeBalancePastYear: Currency(),
    totalCreditExposureAmt: Currency(),
    bankCreditExposureAmt: Currency(),
    insuranceCreditExposureAmt: Currency(),
    specialFinancingCreditExposure: Currency(),
    YJCreditExposure: Currency(),
    otherCreditExposure: Currency(),
    borrowingCapacity: Currency(),
    sellerApDiscountDemandEstimateAmt: Currency(),
    buyerFundingCapacityEstimateAmt: Currency(),
    limitAmt: Currency()
  },
  computeState: function (state) {
    var salesActivityCashFlow = state.salesActivityCashFlow || 0;
    var properInterestCompensationMagnification = state.properInterestCompensationMagnification || 0;
    var properBorrowingInterestRate = state.properBorrowingInterestRate || 0;
    var properInterestLiability = salesActivityCashFlow * properInterestCompensationMagnification * properBorrowingInterestRate / 100;
    var paymentGuaranteeBalancePastYear = state.paymentGuaranteeBalancePastYear || 0;
    var noneInterestLiability = paymentGuaranteeBalancePastYear;
    var properEstimatedBorrowingAmt = properInterestLiability + noneInterestLiability;
    var bankCreditExposureAmt = state.bankCreditExposureAmt || 0;
    var insuranceCreditExposureAmt = state.insuranceCreditExposureAmt || 0;
    var specialFinancingCreditExposure = state.specialFinancingCreditExposure || 0;
    var YJCreditExposure = state.YJCreditExposure || 0;
    var otherCreditExposure = state.otherCreditExposure || 0;
    var totalCreditExposureAmt = +bankCreditExposureAmt
      + insuranceCreditExposureAmt
      + specialFinancingCreditExposure
      + YJCreditExposure
      + otherCreditExposure;
    var borrowingCapacity = properEstimatedBorrowingAmt - totalCreditExposureAmt;
    var sellerApDiscountDemandEstimateAmt = state.sellerApDiscountDemandEstimateAmt || 0;
    var buyerFundingCapacityEstimateAmt = state.buyerFundingCapacityEstimateAmt || 0;
    var limitAmtCandidates = [
      borrowingCapacity,
      sellerApDiscountDemandEstimateAmt,
      buyerFundingCapacityEstimateAmt,
    ];
    var limitAmt = pickLimitAmt(limitAmtCandidates);
    console.log('limitAmt', limitAmt);
    return {
      salesActivityCashFlow,
      properInterestCompensationMagnification,
      properBorrowingInterestRate,
      properInterestLiability,
      paymentGuaranteeBalancePastYear,
      noneInterestLiability,
      properEstimatedBorrowingAmt,
      bankCreditExposureAmt,
      insuranceCreditExposureAmt,
      specialFinancingCreditExposure,
      YJCreditExposure,
      otherCreditExposure,
      totalCreditExposureAmt: +bankCreditExposureAmt
        + insuranceCreditExposureAmt
        + specialFinancingCreditExposure
        + YJCreditExposure
        + otherCreditExposure,
      borrowingCapacity,
      sellerApDiscountDemandEstimateAmt,
      buyerFundingCapacityEstimateAmt,
      limitAmt,
    };
  },
});

/**
 * @param {F2bCommon} common // F2B.common
 * @parma {jQuery} $
 */
function initLimitConfig(common) {

  var promiseAllAjax = common.promiseAllAjax;
  var customSwal = common.customSwal;

	/**
   * 
   */
  var limitConfigValues = {
    properEstimatedBorrowingAmt: null,
    properInterestLiability: null,
    noneInterestLiability: null,
    salesActivityCashFlow: null,
    properInterestCompensationMagnification: null,
    properBorrowingInterestRate: null,
    paymentGuaranteeBalancePastYear: null,
    totalCreditExposureAmt: null,
    bankCreditExposureAmt: null,
    insuranceCreditExposureAmt: null,
    specialFinancingCreditExposure: null,
    YJCreditExposure: null,
    otherCreditExposure: null,
    borrowingCapacity: null,
    sellerApDiscountDemandEstimateAmt: null,
    buyerFundingCapacityEstimateAmt: null,
    limitAmt: null
  };

  var fieldIds = Object.keys(limitConfigValues);
  var limitInputs = new LimitInputs(fieldIds);
  setState(limitConfigValues, limitInputs);

  var limitConfigForm = qs('#limitConfigForm');
  limitConfigForm.addEventListener('submit', function (e) {
    e.preventDefault();
  });
  limitConfigForm.addEventListener('keydown', function (e) {

    if (!(/[.]/.test(e.target.value)) && e.key === '.') {
      return;
    }
    if (!isNaN(e.key) || e.key.length !== 1) {
      return;
    }
    e.preventDefault();
  });

  limitConfigForm.addEventListener('keyup', function (e) {

    var escapeValue = e.target.value.replace(/[^(\d.)]/g, '');
    limitConfigValues[e.target.id] = Number(escapeValue);
    // 동일 데이터가 반복 표시 되는 것은 따로 처리 => displaySameLimitConfigData
    limitConfigValues = calculateLimitConfig(limitConfigValues);
    bindCalculation(limitInputs, limitConfigValues);
    displaySameLimitConfigData(limitInputs);
  });

  function displaySameLimitConfigData(forms) {
    qs('#properInterestLiability2').innerHTML = forms.properInterestLiability.innerHTML;
    qs('#noneInterestLiability2').innerHTML = forms.noneInterestLiability.innerHTML;
  }

  function requestToUpdateLimitConfig(options, succCb) {

    var ajaxOptions = {
      data: options.data,
      formId: options.formId,
      url: '/admin/buyer/ledger/limit',
      method: 'POST',
      alert: true
    };

    return promiseAllAjax(ajaxOptions, succCb);
  }

  function handleLimitSave() {

    var options = {
      data: {
        buyerLimitConfig: {
          ...limitConfigValues,
          buyerSid: qs('#buyerSid').value
        }
      }
    };

    requestToUpdateLimitConfig(options).then(function (data) {

      customSwal({
        text: data.result ? data.result.message : '',
        type: 'success'
      });
    });
  }

	/**
   * 한도설정 저장버튼 Event
   */
  qs('#limitSaveBtn').addEventListener('click', handleLimitSave);
  setLimitConfigEditable(limitInputs, false);
  addBuyerLimitConfigEditBtnEvent(limitInputs);
  // var limitFormData = new FormData(limitConfigForm);
}

/**
 * @param {Array} limitAmtCandidates 
 * @returns {number | undefined}
 */
function pickLimitAmt(limitAmtCandidates) {

  var filteredCandidates = limitAmtCandidates.filter(d => d);
  if (!filteredCandidates.length) {
    return;
  }
  var min = filteredCandidates[0];
  for (var i = 1; i < filteredCandidates.length; i++) {

    if (filteredCandidates[i] < min) {
      min = filteredCandidates[i];
    }
  }
  return min;
}

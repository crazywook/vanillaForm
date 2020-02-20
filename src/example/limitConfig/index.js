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
    bankCreditExposureAmt: Currency
  }
});

function LimitInputs(fieldIds) {

  if (!(this instanceof LimitInputs)) {
    throw new Error('This must be instantiated by New');
  }

  var _this = this;

  fieldIds.forEach(function (id) {

    _this[id] = qs('#' + id);
    if (!_this[id]) {
      throw new Error(id + ' field does not exist');
    }
  });
}

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
 * @param {LimitInputs} forms
 * @param {{}} values
 */
function bindCalculation(forms, limitConfig) {
  if (!(forms instanceof LimitInputs)) {
    throw new Error('forms must be LimitInputs');
  }

  forms.salesActivityCashFlow.value = limitConfig.salesActivityCashFlow.toLocaleString();
  forms.properInterestLiability.innerText = limitConfig.properInterestLiability.toLocaleString();
  forms.noneInterestLiability.innerText = limitConfig.noneInterestLiability.toLocaleString();
  forms.properEstimatedBorrowingAmt.innerText = limitConfig.properEstimatedBorrowingAmt.toLocaleString();
  forms.paymentGuaranteeBalancePastYear.value = limitConfig.paymentGuaranteeBalancePastYear.toLocaleString();
  forms.noneInterestLiability.innerText = limitConfig.paymentGuaranteeBalancePastYear.toLocaleString();

  forms.bankCreditExposureAmt.value = limitConfig.bankCreditExposureAmt.toLocaleString();
  forms.insuranceCreditExposureAmt.value = limitConfig.insuranceCreditExposureAmt.toLocaleString();
  forms.specialFinancingCreditExposure.value = limitConfig.specialFinancingCreditExposure.toLocaleString();
  forms.YJCreditExposure.value = limitConfig.YJCreditExposure.toLocaleString();
  forms.otherCreditExposure.value = limitConfig.otherCreditExposure.toLocaleString();
  forms.totalCreditExposureAmt.innerText = limitConfig.totalCreditExposureAmt.toLocaleString();

  forms.borrowingCapacity.innerText = limitConfig.borrowingCapacity.toLocaleString();
  forms.sellerApDiscountDemandEstimateAmt.value = limitConfig.sellerApDiscountDemandEstimateAmt.toLocaleString();
  forms.buyerFundingCapacityEstimateAmt.value = limitConfig.buyerFundingCapacityEstimateAmt.toLocaleString();
  forms.limitAmt.innerText = limitConfig.limitAmt ? limitConfig.limitAmt.toLocaleString() : '';
}

/**
 * @param {{ salesActivityCashFlow, properInterestLiability,
 *    noneInterestLiability, properEstimatedBorrowingAmt,
 *    paymentGuaranteeBalancePastYear, bankCreditExposureAmt, insuranceCreditExposureAmt,
 *    specialFinancingCreditExposure, YJCreditExposure, otherCreditExposure,
 *    totalCreditExposureAmt, borrowingCapacity,
 *    sellerApDiscountDemandEstimateAmt, buyerFundingCapacityEstimateAmt, limitAmt
 *  }} values 
 */
function calculateLimitConfig(values) {
  var salesActivityCashFlow = values.salesActivityCashFlow || 0;
  var properInterestCompensationMagnification = values.properInterestCompensationMagnification || 0;
  var properBorrowingInterestRate = values.properBorrowingInterestRate || 0;
  var properInterestLiability = salesActivityCashFlow * properInterestCompensationMagnification * properBorrowingInterestRate / 100;
  var paymentGuaranteeBalancePastYear = values.paymentGuaranteeBalancePastYear || 0;
  var noneInterestLiability = paymentGuaranteeBalancePastYear;
  var properEstimatedBorrowingAmt = properInterestLiability + noneInterestLiability;
  var bankCreditExposureAmt = values.bankCreditExposureAmt || 0;
  var insuranceCreditExposureAmt = values.insuranceCreditExposureAmt || 0;
  var specialFinancingCreditExposure = values.specialFinancingCreditExposure || 0;
  var YJCreditExposure = values.YJCreditExposure || 0;
  var otherCreditExposure = values.otherCreditExposure || 0;
  var totalCreditExposureAmt = +bankCreditExposureAmt
    + insuranceCreditExposureAmt
    + specialFinancingCreditExposure
    + YJCreditExposure
    + otherCreditExposure;
  var borrowingCapacity = properEstimatedBorrowingAmt - totalCreditExposureAmt;
  var sellerApDiscountDemandEstimateAmt = values.sellerApDiscountDemandEstimateAmt || 0;
  var buyerFundingCapacityEstimateAmt = values.buyerFundingCapacityEstimateAmt || 0;
  var limitAmtCandidates = [
    borrowingCapacity,
    sellerApDiscountDemandEstimateAmt,
    buyerFundingCapacityEstimateAmt,
  ];
  var limitAmt = pickLimitAmt(limitAmtCandidates);
  return {
    salesActivityCashFlow,
    properBorrowingInterestRate,
    properInterestCompensationMagnification,
    properInterestLiability,
    noneInterestLiability,
    properEstimatedBorrowingAmt,
    paymentGuaranteeBalancePastYear,
    bankCreditExposureAmt,
    insuranceCreditExposureAmt,
    specialFinancingCreditExposure,
    YJCreditExposure,
    otherCreditExposure,
    totalCreditExposureAmt,
    borrowingCapacity,
    sellerApDiscountDemandEstimateAmt,
    buyerFundingCapacityEstimateAmt,
    limitAmt
  };
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

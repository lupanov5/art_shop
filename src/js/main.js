import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import sliders from "./modules/sliders";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStiles from "./modules/showMoreStiles";
import calc from "./modules/calc";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStiles('#styles .row', '.button-styles');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');

});
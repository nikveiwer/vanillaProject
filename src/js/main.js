import "./slider";
import modals from "./modules/modals.js";
import  tabs from "./modules/tabs.js";
import forms from "./modules/forms.js";
import timer from "./modules/timer";
import images from "./modules/images.js";

window.addEventListener("DOMContentLoaded", () => {
    let deadline = "2023-02-01";

    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', "inline-block");
    forms();
    timer(".containe1", deadline);
    images();
    

});




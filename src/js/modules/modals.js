const modals = () => {

    function bindModal(trgSelector, closeSelector, modalSelector, closeClickOverlay = true, calc = false) {
        const trgBtns = document.querySelectorAll(trgSelector),
              modal = document.querySelector(modalSelector),
              closeBtns = document.querySelectorAll(closeSelector),
              windows = document.querySelectorAll("[data-modal]");

        trgBtns.forEach(btn => {

            btn.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = "none";
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";

            })

        })

        closeBtns.forEach(btn => {

            btn.addEventListener("click", () => {

                windows.forEach(item => {
                    item.style.display = "none";
                });

                modal.style.display = "none";
                document.body.style.overflow = "";

            })

        })

        modal.addEventListener("click", (e) => {
            if (e.target == modal && closeClickOverlay) {
                modal.style.display = "none";
                document.body.style.overflow = "";

                windows.forEach(item => {
                    item.style.display = "none";
                });
            }
        });
    }

    function bindModalwithTime(modalSelector, time) {
       const modal = document.querySelector(modalSelector);

       setTimeout(() => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; 
       }, time);

    }

    bindModal(".header_btn", ".popup_close", ".popup_engineer");
    bindModal(".phone_link", ".popup_close", ".popup");
    bindModal(".popup_calc_btn", ".popup_calc_close", ".popup_calc");
    bindModal(".popup_calc_button", ".popup_calc_profile_close", ".popup_calc_profile", false);
    bindModal(".popup_calc_profile_button", ".popup_calc_end_close", ".popup_calc_end", false); 

    // bindModalwithTime(".popup", 60000);

}


export default modals;
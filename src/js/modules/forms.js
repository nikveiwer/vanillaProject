import modals from "./modals.js"

const forms = () => {

    const windowInfo = {};

    const form = document.querySelectorAll("form"),
                 input = document.querySelectorAll("input"),
                 phoneInputs = document.querySelectorAll("input[name='user_phone']");

    const message = {
    loading: 'Loading...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
    };

    const getOlnlyNumber = (inputsAray) => {
        inputsAray.forEach(input => {
            input.addEventListener("input", () => {
                input.value = input.value.replace(/\D/, "");
            });
    
        });
    };

    getOlnlyNumber(phoneInputs);

    const postData = async (url, data) => {
        const status = await fetch(url, {
            method: "POST",
            // headers: {
            //     'Content-type': 'application/json'
            // },
            body: data
        });

        return await status.text();

    }


    form.forEach((form) => {


        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // const data = {
            //     name: form.elements.user_name.value,
            //     phone: form.elements.user_phone.value
            // }

            const formData = new FormData(form);
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));

            let status = document.createElement("div");
            form.append(status);
            status.textContent = message.loading;
            status.style.fontSize = "30px";

    


            postData("assets/server.php", formData)
            .then(data => {
                status.textContent = message.success;
                console.log(data);
                
            }).catch(() => {
                status.textContent = message.failure;
            }).finally(() => {
                form.reset();
                setTimeout(() => {
                    status.remove();
                }, 4000);
            });





        });




    })

    function getCalcInformation() {

        const sizeInputs = document.querySelectorAll("input[name='window_size']");
        const sizeButton = document.querySelector(".popup_calc_button");
        const windowTypes = document.querySelectorAll(".balcon_icons_img");


        getOlnlyNumber(sizeInputs);



        sizeButton.addEventListener("click", (e) => {
            if (e.target && sizeInputs[0].value !== "" && sizeInputs[1].value !== "") {
                windowTypes.forEach((windowType) => {
                    if (windowType.classList.contains("do_image_more")) {
                        windowInfo.selectedWindow = windowType.firstElementChild.getAttribute("alt");
                    }
                });

                windowInfo.withInput = sizeInputs[0].value;
                windowInfo.heightInput = sizeInputs[1].value;

                sizeInputs.forEach(input => {
                    input.value = "";
                    input.style.borderColor = "#ccc";
                })

                console.log(windowInfo);
            } else {
                fieldsWasntFilled(".popup_calc");
                if (sizeInputs[0].value == "") {
                    sizeInputs[0].style.borderColor = "red";
                } else {
                    sizeInputs[0].style.borderColor = "black";
                }
                if (sizeInputs[1].value == "") {
                    sizeInputs[1].style.borderColor = "red";
                } else {
                    sizeInputs[2].style.borderColor = "black";
                }
            }
        });

        
    }

    function getCalcProfileInformation() {
        const selectForm = document.querySelector("#view_type");
        const selectBtn = document.querySelector(".popup_calc_profile_button");
        const checkboxes = document.querySelectorAll(".checkbox-custom");
        const coldCheckBird = document.querySelector(".checkbox-custom[id='cold']::before");
        const warmCheckBird = document.querySelector("checkbox-custom::before");

        // toggleCheckboxes("cold");

        console.log(coldCheckBird);
        console.log(warmCheckBird);

        selectBtn.addEventListener("click", () => {
            windowInfo.glassType = selectForm.value;
            
        });


        // function toggleCheckboxes(id) {
        //     coldCheckBird.display = "none";
        //     warmCheckBird.display = "none";
        //     checkboxes.forEach(check => {
        //         if (check.getAttribute("id") == id) {
        //             check.classList.add(`checkbox-custom[id=${id}]::before`);
        //         }
        //     })
        // }
    }

    function fieldsWasntFilled(modalSelector) {
        const modal = document.querySelector(modalSelector);
        const windows = document.querySelectorAll("[data-modal]");

        windows.forEach(item => {
            item.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    getCalcProfileInformation();
    getCalcInformation();


};
export default forms;
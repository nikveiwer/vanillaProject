const timer = (id, deadline) => {
    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/1000/60/60) % 24),
              days = Math.floor((t/1000/60/60/24));

        return {t, days, hours, minutes, seconds};
    };

    const getZero = (num) => {
        if (num <= 9) {
            return "0" + num;
        } else {
            return num;
        }
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              days = document.querySelector("#days"),
              hours = document.querySelector("#hours"),
              minutes = document.querySelector("#minutes"),
              seconds = document.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.t <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }

        }
    }

    setClock(id, deadline);
};

export default timer;
/* =========================================================
   RABIE RIDGE INK HOUSE
   SERVICES BOOKING
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const serviceButtons =
        document.querySelectorAll(".service-book-btn");

    const bookingSection =
        document.querySelector("#book");

    const bookingSelect =
        document.querySelector("#booking-service");


    serviceButtons.forEach(button => {

        button.addEventListener("click", event => {

            const selectedService =
                button.dataset.service;

            if (bookingSelect && selectedService) {

                const options =
                    Array.from(bookingSelect.options);

                const matchingOption =
                    options.find(option =>
                        option.textContent
                            .toLowerCase()
                            .includes(
                                selectedService.toLowerCase()
                            )
                    );

                if (matchingOption) {

                    bookingSelect.value =
                        matchingOption.value;

                    bookingSelect.dispatchEvent(
                        new Event("change", {
                            bubbles: true
                        })
                    );
                }
            }


            if (bookingSection) {

                setTimeout(() => {

                    bookingSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 50);

            }

        });

    });

});
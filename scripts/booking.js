/* =========================================================
   RABIE RIDGE INK HOUSE
   BOOKING JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("booking-form");

    const serviceSelect =
        document.getElementById("booking-service");

    const message =
        document.getElementById("booking-message");

    const dateInput =
        document.getElementById("booking-date");


    /* =====================================================
       PREVENT PAST DATES
       ===================================================== */

    if (dateInput) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");

        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =====================================================
       LOAD SERVICE SELECTED FROM SERVICES SECTION
       ===================================================== */

    const savedService =
        sessionStorage.getItem(
            "selectedService"
        );


    if (
        savedService &&
        serviceSelect
    ) {

        const option =
            Array.from(
                serviceSelect.options
            ).find(
                item =>
                    item.value === savedService
            );


        if (option) {

            serviceSelect.value =
                savedService;

        }

    }


    /* =====================================================
       FORM SUBMIT
       ===================================================== */

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            /* =============================================
               GET VALUES
               ============================================= */

            const name =
                document
                    .getElementById("booking-name")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("booking-phone")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("booking-email")
                    .value
                    .trim();

            const date =
                document
                    .getElementById("booking-date")
                    .value;

            const service =
                document
                    .getElementById("booking-service")
                    .value;

            const placement =
                document
                    .getElementById("booking-placement")
                    .value
                    .trim();

            const description =
                document
                    .getElementById("booking-description")
                    .value
                    .trim();

            const reference =
                document
                    .getElementById("booking-reference");


            /* =============================================
               BASIC VALIDATION
               ============================================= */

            if (
                !name ||
                !phone ||
                !date ||
                !service ||
                !description
            ) {

                showMessage(
                    "Please complete all required fields before sending your booking request."
                );

                return;

            }


            /* =============================================
               FORMAT DATE
               ============================================= */

            let formattedDate =
                date;


            if (date) {

                const dateObject =
                    new Date(
                        `${date}T00:00:00`
                    );


                formattedDate =
                    dateObject.toLocaleDateString(
                        "en-ZA",
                        {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        }
                    );

            }


            /* =============================================
               REFERENCE NOTICE
               ============================================= */

            let referenceText =
                "No reference image attached.";

            if (
                reference &&
                reference.files.length > 0
            ) {

                referenceText =
                    `Reference image selected: ${reference.files[0].name}`;

            }


            /* =============================================
               WHATSAPP MESSAGE
               ============================================= */

            const whatsappMessage =

`RABIE RIDGE INK HOUSE — BOOKING REQUEST

━━━━━━━━━━━━━━━━━━

NAME:
${name}

PHONE / WHATSAPP:
${phone}

EMAIL:
${email || "Not provided"}

PREFERRED DATE:
${formattedDate}

SERVICE:
${service}

PLACEMENT:
${placement || "Not specified"}

IDEA / DESCRIPTION:
${description}

${referenceText}

━━━━━━━━━━━━━━━━━━

Please let me know availability and the estimated quote.`;


            /* =============================================
               WHATSAPP URL
               ============================================= */

            const whatsappNumber =
                "27649086297";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            /* =============================================
               SAVE SERVICE
               ============================================= */

            sessionStorage.setItem(
                "selectedService",
                service
            );


            /* =============================================
               OPEN WHATSAPP
               ============================================= */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            showMessage(
                "Your booking request has been prepared. WhatsApp will open so you can send it to Rabie Ridge Ink House."
            );

        }
    );


    /* =====================================================
       MESSAGE
       ===================================================== */

    function showMessage(text) {

        message.textContent =
            text;

        message.classList.add(
            "show"
        );

        message.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }

});
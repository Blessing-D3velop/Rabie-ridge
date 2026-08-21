/* =========================================================
   RABIE RIDGE INK HOUSE
   CONTACT JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("contact-form");

    const message =
        document.getElementById(
            "contact-form-message"
        );


    if (!form) {
        return;
    }


    form.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document
                .getElementById("contact-name")
                .value
                .trim();

        const phone =
            document
                .getElementById("contact-phone")
                .value
                .trim();

        const email =
            document
                .getElementById("contact-email")
                .value
                .trim();

        const subject =
            document
                .getElementById("contact-subject")
                .value
                .trim();

        const userMessage =
            document
                .getElementById("contact-message")
                .value
                .trim();


        /* =================================================
           VALIDATION
           ================================================= */

        if (
            !name ||
            !phone ||
            !subject ||
            !userMessage
        ) {

            showMessage(
                "Please complete your name, phone number, subject and message."
            );

            return;

        }


        /* =================================================
           WHATSAPP MESSAGE
           ================================================= */

        const whatsappMessage =

`RABIE RIDGE INK HOUSE — CONTACT MESSAGE

━━━━━━━━━━━━━━━━━━

NAME:
${name}

PHONE / WHATSAPP:
${phone}

EMAIL:
${email || "Not provided"}

SUBJECT:
${subject}

MESSAGE:
${userMessage}

━━━━━━━━━━━━━━━━━━

Sent through the Rabie Ridge Ink House website.`;


        /* =================================================
           WHATSAPP URL
           ================================================= */

        const whatsappNumber =
            "27649086297";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        /* =================================================
           OPEN WHATSAPP
           ================================================= */

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        showMessage(
            "Your message has been prepared. WhatsApp will open so you can send it directly to the studio."
        );


        /* =================================================
           RESET
           ================================================= */

        form.reset();

    });


    /* =====================================================
       STATUS MESSAGE
       ===================================================== */

    function showMessage(text) {

        message.textContent =
            text;

        message.classList.add("show");

        message.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }

});
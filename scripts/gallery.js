/* =========================================================
   RABIE RIDGE INK HOUSE
   GALLERY JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filters =
        document.querySelectorAll(".gallery-filter");

    const items =
        Array.from(
            document.querySelectorAll(".gallery-item")
        );

    const modal =
        document.getElementById("gallery-modal");

    const modalImage =
        document.getElementById("gallery-modal-image");

    const modalTitle =
        document.getElementById("gallery-modal-title");

    const modalCount =
        document.getElementById("gallery-modal-count");

    const closeButton =
        document.querySelector(".gallery-modal-close");

    const previousButton =
        document.querySelector(".gallery-modal-prev");

    const nextButton =
        document.querySelector(".gallery-modal-next");


    let visibleItems = [...items];

    let currentIndex = 0;


    /* =====================================================
       FILTER
       ===================================================== */

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selected =
                filter.dataset.filter;


            filters.forEach(button => {

                button.classList.remove("active");

            });


            filter.classList.add("active");


            visibleItems =
                items.filter(item => {

                    return (
                        selected === "all" ||
                        item.dataset.category === selected
                    );

                });


            items.forEach(item => {

                if (visibleItems.includes(item)) {

                    item.classList.remove(
                        "gallery-hidden"
                    );

                } else {

                    item.classList.add(
                        "gallery-hidden"
                    );

                }

            });

        });

    });


    /* =====================================================
       OPEN MODAL
       ===================================================== */

    function openModal(index) {

        if (!visibleItems.length) return;


        currentIndex = index;


        const item =
            visibleItems[currentIndex];


        const image =
            item.dataset.image;

        const title =
            item.dataset.title;


        modalImage.src = image;

        modalImage.alt = title;

        modalTitle.textContent = title;


        modalCount.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(visibleItems.length).padStart(2, "0")}`;


        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE MODAL
       ===================================================== */

    function closeModal() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    /* =====================================================
       NEXT
       ===================================================== */

    function nextImage() {

        currentIndex =
            (currentIndex + 1) %
            visibleItems.length;

        openModal(currentIndex);

    }


    /* =====================================================
       PREVIOUS
       ===================================================== */

    function previousImage() {

        currentIndex =
            (
                currentIndex -
                1 +
                visibleItems.length
            ) %
            visibleItems.length;

        openModal(currentIndex);

    }


    /* =====================================================
       ITEM CLICK
       ===================================================== */

    items.forEach(item => {

        item.addEventListener("click", () => {

            const index =
                visibleItems.indexOf(item);

            if (index !== -1) {

                openModal(index);

            }

        });

    });


    /* =====================================================
       CONTROLS
       ===================================================== */

    closeButton.addEventListener(
        "click",
        closeModal
    );

    nextButton.addEventListener(
        "click",
        nextImage
    );

    previousButton.addEventListener(
        "click",
        previousImage
    );


    /* =====================================================
       KEYBOARD
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                !modal.classList.contains("active")
            ) {

                return;

            }


            if (event.key === "Escape") {

                closeModal();

            }


            if (event.key === "ArrowRight") {

                nextImage();

            }


            if (event.key === "ArrowLeft") {

                previousImage();

            }

        }
    );

});
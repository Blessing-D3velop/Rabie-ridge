/* =========================================================
   RABIE RIDGE INK HOUSE
   GALLERY JS — dynamic image array, no filters/tags
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIG — image1.jpeg through image25.jpeg
       ===================================================== */

    const IMAGE_COUNT = 20;
    const IMAGE_FOLDER = "assets/";

    const images = Array.from(
        { length: IMAGE_COUNT },
        (_, i) => `${IMAGE_FOLDER}image${i + 1}.jpeg`
    );


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const grid =
        document.getElementById("gallery-grid");

    const modal =
        document.getElementById("gallery-modal");

    const modalImage =
        document.getElementById("gallery-modal-image");

    const modalCount =
        document.getElementById("gallery-modal-count");

    const closeButton =
        document.querySelector(".gallery-modal-close");

    const previousButton =
        document.querySelector(".gallery-modal-prev");

    const nextButton =
        document.querySelector(".gallery-modal-next");

    if (!grid || !modal) return;


    let currentIndex = 0;


    /* =====================================================
       BUILD GRID
       ===================================================== */

    images.forEach((src, index) => {

        const item = document.createElement("button");

        item.type = "button";
        item.className = "gallery-item";

        const img = document.createElement("img");

        img.src = src;
        img.alt = `Tattoo work ${index + 1}`;
        img.loading = "lazy";

        item.appendChild(img);

        item.addEventListener("click", () => {
            openModal(index);
        });

        grid.appendChild(item);

    });


    /* =====================================================
       OPEN MODAL
       ===================================================== */

    function openModal(index) {

        if (!images.length) return;

        currentIndex = index;

        modalImage.src = images[currentIndex];
        modalImage.alt = `Tattoo work ${currentIndex + 1}`;

        modalCount.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }


    /* =====================================================
       CLOSE MODAL
       ===================================================== */

    function closeModal() {

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    /* =====================================================
       NEXT / PREVIOUS
       ===================================================== */

    function nextImage() {

        currentIndex = (currentIndex + 1) % images.length;
        openModal(currentIndex);

    }

    function previousImage() {

        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(currentIndex);

    }


    /* =====================================================
       CONTROLS
       ===================================================== */

    closeButton.addEventListener("click", closeModal);
    nextButton.addEventListener("click", nextImage);
    previousButton.addEventListener("click", previousImage);


    /* =====================================================
       KEYBOARD
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (!modal.classList.contains("active")) return;

        if (event.key === "Escape") closeModal();
        if (event.key === "ArrowRight") nextImage();
        if (event.key === "ArrowLeft") previousImage();

    });

});
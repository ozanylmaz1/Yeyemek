document.addEventListener("DOMContentLoaded", () => {
    const cardList = document.querySelector("#card-list");
    const addCardButton = document.querySelector(".yeni-card-btn");
    const cardFormContainer = document.querySelector("#card-form-container");
    const cardForm = document.querySelector("#card-form");
    const cancelButton = document.querySelector("#cancel-button");

    // "Yeni Kart Ekle" butonuna tıklayınca formu göster
    addCardButton.addEventListener("click", () => {
        cardFormContainer.style.display = "block";
    });

    // Formu iptal et
    cancelButton.addEventListener("click", () => {
        cardFormContainer.style.display = "none";
        cardForm.reset();
    });

    // Yeni kart ekleme
    cardForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Kullanıcıdan alınan bilgiler
        const cardNumber = document.querySelector("#card-number").value;
        const expiryDate = document.querySelector("#expiry-date").value;

        // Kart numarasının ilk hanesine göre logo seçimi
        const firstDigit = cardNumber[0];
        let cardLogoClass = ""; // Logo için CSS sınıfı

        if (firstDigit === "2" || firstDigit === "5") {
            cardLogoClass = "card-icon-1"; // Mastercard
        } else if (firstDigit === "4") {
            cardLogoClass = "card-icon-2"; // Visa
        } else {
            alert("Geçerli bir kart numarası giriniz! (2, 4 veya 5 ile başlamalı)");
            return;
        }

        // Son dört haneyi al
        const lastFourDigits = cardNumber.slice(-4);

        // Kartı listeye ekle
        const newCardHTML = `
            <div class="card-container">
                <div class="${cardLogoClass}" style="background-size: cover; margin-right: 5px;"></div>
                <div class="card-details">•••• ${lastFourDigits}</div>
                <div class="expiry-date">${expiryDate}</div>
                <span class="deleteicon" style="margin-left: 10px; cursor: pointer;">🗑️</span>
            </div>
        `;

        cardList.insertAdjacentHTML("beforeend", newCardHTML);

        // Silme işlevi ekle
        addDeleteFunctionality();

        // Formu gizle ve sıfırla
        cardFormContainer.style.display = "none";
        cardForm.reset();
    });

    // Silme işlevi
    const addDeleteFunctionality = () => {
        const deleteButtons = document.querySelectorAll(".deleteicon");
        deleteButtons.forEach((button) => {
            button.onclick = function () {
                this.parentElement.remove();
            };
        });
    };

    // İlk çalıştırmada mevcut kartlar için silme işlevi ekle
    addDeleteFunctionality();
});

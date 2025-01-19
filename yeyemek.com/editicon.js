const editIcon = document.getElementById("edit-icon");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const addresstitle = document.getElementById("addresstitle");
const addressdetails = document.getElementById("addressdetails");
const citydistrict = document.getElementById("citydistrict");

let isEditing = false;

editIcon.addEventListener("click", () => {
    if (!isEditing) {
        isEditing = true;
        editIcon.textContent = "✔️";
        [firstname, lastname, addresstitle, addressdetails, citydistrict].forEach((input) => {
            input.removeAttribute("readonly");
            input.setAttribute("placeholder", input.value);
            input.value = "";
        });
    } else {
        isEditing = false;
        editIcon.textContent = "✏️";
        [firstname, lastname, addresstitle, addressdetails, citydistrict].forEach((input) => {
            if (input.value.trim() === "") {
                input.value = input.placeholder;
            }
            input.setAttribute("readonly", "true");
        });
    }
});
function change() {
    document.getElementById("name").textContent = document.getElementById("nameInput").value;
    document.getElementById("mail").textContent = document.getElementById("mailInput").value;
    document.getElementById("phones").textContent = document.getElementById("phoneInput").value;
}
function reset() {
    document.getElementById("save").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.getElementById("new-address-card").style.display = "none";
    document.getElementById("reset").style.display = "none";
}
function add() {
    document.getElementById("save").style.display = "block";
    document.getElementById("add").style.display = "none";
    document.getElementById("new-address-card").style.display = "flex";
    document.getElementById("reset").style.display = "block";
}
function save() {
    document.getElementById("save").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.getElementById("new-address-card").style.display = "none";
    document.getElementById("reset").style.display = "none";
}
function cardsreset() {
    document.getElementById("cardssave").style.display = "none";
    document.getElementById("cardsadd").style.display = "block";
    document.getElementById("newcards-add").style.display = "none";
    document.getElementById("cardsreset").style.display = "none";
}
function cardsadd() {
    document.getElementById("cardssave").style.display = "block";
    document.getElementById("cardsadd").style.display = "none";
    document.getElementById("newcards-add").style.display = "flex";
    document.getElementById("cardsreset").style.display = "block";
}
function cardssave() {
    document.getElementById("cardssave").style.display = "none";
    document.getElementById("cardsadd").style.display = "block";
    document.getElementById("newcards-add").style.display = "none";
    document.getElementById("cardsreset").style.display = "none";
}
function addressesview() {
    document.getElementById("addresses").style.display = "block";
    document.getElementById("orders").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("settings").style.display = "none";
}
function ordersview() {
    document.getElementById("addresses").style.display = "none";
    document.getElementById("orders").style.display = "flex";
    document.getElementById("cards").style.display = "none";
    document.getElementById("settings").style.display = "none";
}
function cardsview() {
    document.getElementById("addresses").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("cards").style.display = "block";
    document.getElementById("settings").style.display = "none";
}
function settingsview() {
    document.getElementById("addresses").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("settings").style.display = "block";
}
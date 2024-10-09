const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//modal open function
const openModal = () => {
    console.log("Modal is Open");
    overlay.classList.add("active");
    modal.classList.add("active");
    modal.classList.add("overlayactive");
}; 
// modal close function
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    // modal.classList.remove("active");
};
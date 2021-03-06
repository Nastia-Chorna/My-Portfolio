const modalBts = document.querySelectorAll(".modal-open");

modalBts.forEach(function (btn) {
    btn.onclick = function () {
        
        const modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };

});

const closeBts = document.querySelectorAll(".modal-close");
closeBts.forEach(function (btn) {
    btn.onclick = function () {
    const modal = (btn.closest(".modal").style.display = "none");

    };
});

window.onclick = function (e) {
    if (e.target.className === 'modal') {
        e.target.style.display = "none";
    }
}

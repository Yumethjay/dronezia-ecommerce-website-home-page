//window.onload = function() {
    //setTimeout(function() {
        //alert("Hello");
    //}, 2000); // 2 sec in milliseconds
//};

window.onload = function() {
    setTimeout(function() {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }, 10000); // 3 seconds in milliseconds
};

function more() {
    window.location = "next.php";
}

//scroll reveal animation
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2500,
    delay: 100
});
//

//target
ScrollReveal().reveal('.div1', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('nav ul', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.logo', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.btn', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.hr', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.mrq', {delay: 550, origin: 'right'});
// 3
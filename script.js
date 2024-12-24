function triggerJumpscare() {
    // Play scream audio
    const scream = document.getElementById("scream");
    scream.play();

    // Show jumpscare image
    const jumpscare = document.getElementById("jumpscare");
    jumpscare.style.opacity = "1";
    jumpscare.style.visibility = "visible";

    // Hide jumpscare after 3 seconds
    setTimeout(() => {
        jumpscare.style.opacity = "0";
        jumpscare.style.visibility = "hidden";
    }, 3000);
}

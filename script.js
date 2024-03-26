function Page2() {
    document.getElementById("konten2").classList.remove("hide")
    document.getElementById("konten1").classList.add("hide")
    setTimeout(function() {
        document.getElementById("konten1").classList.remove("hide")
        document.getElementById("konten2").classList.add("hide")
        document.getElementById("konten3").classList.add("hide")
    }, 2000);
}

function Page3() {
    document.getElementById("konten3").classList.remove("hide")
    document.getElementById("konten1").classList.add("hide")
    setTimeout(function() {
        document.getElementById("konten1").classList.remove("hide")
        document.getElementById("konten2").classList.add("hide")
        document.getElementById("konten3").classList.add("hide")
    }, 2000);
}

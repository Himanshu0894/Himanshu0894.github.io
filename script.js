let typed = new Typed (".typing",{
    strings: ["Java Back-End Developer", "Blogger", "Designer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
}); 

let myFun = () => {
    let name = document.getElementById('name1').value
    let email = document.getElementById('email1').value
    let subject = document.getElementById('subject1').value
    let query = document.getElementById('describe1').value
    alert("Name : " + name + "\n Email : " + email + "\n Subject : " + subject + "\n Query : " + query);
}

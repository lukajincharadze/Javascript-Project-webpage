let dropdown_content2 = document.getElementsByClassName("dropdown_content2_a");

Array.from(dropdown_content2).forEach((element) => {
  element.addEventListener("click", () => {
    circle_img.classList.remove("active");
    navigation2.classList.remove("active");
    navblog.classList.remove("active");
    nav_logo.classList.remove("active");
    navigation.classList.remove("active");
    navigationbg.classList.remove("active");
    nav_wraper.classList.remove("active");
    burger.classList.remove("change");
  });
});

let dropdownli_sec = document.getElementsByClassName("dropdownli_sec");

Array.from(dropdownli_sec).forEach((element) => {
  element.addEventListener("click", () => {
    circle_img.classList.remove("active");
    navigation2.classList.remove("active");
    navblog.classList.remove("active");
    nav_logo.classList.remove("active");
    navigation.classList.remove("active");
    navigationbg.classList.remove("active");
    nav_wraper.classList.remove("active");
    burger.classList.remove("change");
  });
});

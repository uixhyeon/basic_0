window.addEventListener("load", function () {
  // 햄버거를 클릭할때하 햄버거 담아야함
  // 햄ㅂ거 메뉴기능
  const hamburger = this.document.querySelector("#hamburger");
  const mobileManu = this.document.querySelector("#mobileMenu");
  const overlay = this.document.querySelector("#overlay");
  // 모바일 햄버거 바 클릭시
  hamburger.addEventListener("click", function () {
    mobileManu.classList.add("active");
    // (클래스명 틀리지 않게 주의)
    overlay.classList, add("active");
    hamburger.classList.add("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = mobileManu.classList.contains("active") ? "hidden" : ""
    // 오버플로우는 스크롤 자체 생기는거  삼항연산자
  });
  overlay.addEventListener("click", function () {
    mobileManu.classList.remove("active");
    overlay.classList, remove("active");
    hamburger.classList.add("active");
    hamburger.classList.remove("active");
  });
  mobileManu.addEventListener("click", function () {
    mobileManu.classList.remove("active");
    overlay.classList, remove("active");
    hamburger.classList.add("active");
    hamburger.classList.remove("active");
     document.body.style.overflow = "";
  });
});

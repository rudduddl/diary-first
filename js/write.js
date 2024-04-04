const form = document.getElementById("diaryForm");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("write-box").value;

    const diaryEntry = {
      date: date,
      title: title,
      content: content,
    };

    saveToLocalStorage(diaryEntry);

    alert("일기가 성공적으로 저장되었습니다.");

    window.location.href = "home.html";
  });

  function saveToLocalStorage(entry) {
    let diaries = JSON.parse(localStorage.getItem("diaries")) || [];
    diaries.push(entry);
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }
});

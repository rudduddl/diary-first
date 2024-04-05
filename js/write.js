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

    window.location.href = "home.html";
  });

  function saveToLocalStorage(entry) {
    let diaries = JSON.parse(localStorage.getItem("diaries")) || {};
    const key = generateKey();

    diaries[key] = entry;
    localStorage.setItem("diaries", JSON.stringify(diaries));

    alert("일기가 성공적으로 저장되었습니다.");
  }

  function generateKey() {
    return Math.random().toString(36).substr(2, 9);
  }
});

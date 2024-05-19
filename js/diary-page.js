document.addEventListener("DOMContentLoaded", function () {
  // 일기 페이지에서 일기를 표시할 요소들을 가져옵니다.
  const dateElement = document.getElementById("date");
  const titleElement = document.getElementById("title");
  const contentElement = document.getElementById("content");

  // diary-page.html에서 URL 매개변수로 전달된 일기 데이터를 가져옵니다.
  const params = new URLSearchParams(window.location.search);
  const date = params.get("date");
  const title = params.get("title");
  const content = params.get("content");

  // 가져온 일기 데이터를 각 요소에 표시합니다.
  dateElement.value = date;
  titleElement.value = title;
  contentElement.value = content;
});

function goToEditPage() {
  const date = document.getElementById("date").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const url =
    "edit.html?date=" +
    encodeURIComponent(date) +
    "&title=" +
    encodeURIComponent(title) +
    "&content=" +
    encodeURIComponent(content);
  console.log("실행됨");
  window.open(url, "_blank");
}

// 이 함수는 예시로서, 기존의 일기 항목을 폼에 로드하는 방법을 보여줍니다.
function loadDiaryEntry(key) {
  let diaries = JSON.parse(localStorage.getItem("diaries")) || {};
  if (diaries[key]) {
    document.getElementById("date").value = diaries[key].date;
    document.getElementById("title").value = diaries[key].title;
    document.getElementById("content").value = diaries[key].content;
    document.getElementById("diary-key").value = key;
  }
}

//diary-key
function deleteDiary() {
  const key = document.getElementById("diary-key").value;
  let diaries = JSON.parse(localStorage.getItem("diaries")) || {};

  if (key && diaries[key]) {
    delete diaries[key];
    localStorage.setItem("diaries", JSON.stringify(diaries));
    alert("일기가 성공적으로 삭제되었습니다.");
    // 일기 목록 페이지로 이동 또는 다른 적절한 행동 수행
    window.location.href = "home.html";
  } else {
    alert("일기를 찾을 수 없습니다.");
  }
}

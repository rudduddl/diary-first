document.addEventListener("DOMContentLoaded", function () {
  displayDiaries(); // 일기를 표시하는 함수 호출
});

function displayDiaries() {
  const diaryContainer = document.getElementById("diary-container");
  diaryContainer.innerHTML = "";

  // 로컬 스토리지에서 일기 데이터를 가져옵니다.
  const diaries = JSON.parse(localStorage.getItem("diaries")) || {};

  // 가져온 일기 데이터를 반복하여 표시합니다.
  Object.keys(diaries).forEach((key) => {
    const entry = diaries[key];

    // 일기를 표시할 요소들을 생성합니다.
    const diaryBox = document.createElement("div");
    diaryBox.classList.add("diary-box");

    // 일기의 데이터를 해당 요소에 저장합니다.
    diaryBox.setAttribute("data-date", entry.date);
    diaryBox.setAttribute("data-title", entry.title);
    diaryBox.setAttribute("data-content", entry.content);

    // 일기를 diaryContainer에 추가합니다.
    diaryContainer.appendChild(diaryBox);

    // 일기의 date, title을 표시할 span 요소를 생성하여 추가합니다.
    const dateSpan = document.createElement("span");
    dateSpan.textContent = entry.date;

    const titleSpan = document.createElement("span");
    titleSpan.textContent = entry.title;

    diaryBox.appendChild(dateSpan);
    diaryBox.appendChild(titleSpan);

    // diaryBox를 클릭했을 때 해당 일기를 표시하는 이벤트 리스너를 추가합니다.
    diaryBox.addEventListener("click", function () {
      // 해당 일기의 데이터를 URL 매개변수로 diary-page.html로 전달합니다.
      const url = `diary-page.html?date=${encodeURIComponent(
        entry.date
      )}&title=${encodeURIComponent(entry.title)}&content=${encodeURIComponent(
        entry.content
      )}`;

      // 페이지를 이동합니다.
      window.location.href = url;
    });
  });
}

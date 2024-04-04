document.addEventListener("DOMContentLoaded", function () {
  //페이지가 로드될 때 실행되는 코드
  displayDiaries(); //일기를 표시하는 함수 호출
});

function displayDiaries() {
  const diaryContainer = document.getElementById("diary-container");
  diaryContainer.innerHTML = "";

  // 로컬 스토리지에서 일기 데이터를 가져옵니다.
  const diaries = JSON.parse(localStorage.getItem("diaries")) || [];

  // 가져온 일기 데이터를 반복하여 표시합니다.
  diaries.forEach((entry) => {
    const diaryBox = document.createElement("div");
    diaryBox.classList.add("diary-box");

    const dateSpan = document.createElement("span");
    dateSpan.textContent = entry.date;

    const titleSpan = document.createElement("span");
    titleSpan.textContent = entry.title;

    diaryBox.appendChild(dateSpan);
    diaryBox.appendChild(titleSpan);
    diaryContainer.appendChild(diaryBox);
  });
}

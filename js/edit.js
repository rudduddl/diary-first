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

  // 저장 버튼 클릭 시 수정된 일기 데이터를 저장합니다.
  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", function () {
    event.preventDefault();
    const modifiedDate = dateElement.value;
    const modifiedTitle = titleElement.value;
    const modifiedContent = contentElement.value;

    // 수정된 데이터를 로컬 스토리지에 저장합니다.
    localStorage.setItem("modifiedDate", modifiedDate);
    localStorage.setItem("modifiedTitle", modifiedTitle);
    localStorage.setItem("modifiedContent", modifiedContent);

    // 기존의 일기 목록을 가져옵니다.
    let diaries = JSON.parse(localStorage.getItem("diaries")) || {};

    // 수정된 일기를 찾아서 업데이트합니다.
    for (const key in diaries) {
      if (diaries.hasOwnProperty(key)) {
        const diary = diaries[key];
        if (
          diary.date === date &&
          diary.title === title &&
          diary.content === content
        ) {
          // 해당 일기를 업데이트합니다.
          diary.date = modifiedDate;
          diary.title = modifiedTitle;
          diary.content = modifiedContent;
          break;
        }
      }
    }

    // 업데이트된 일기 목록을 로컬 스토리지에 저장합니다.
    localStorage.setItem("diaries", JSON.stringify(diaries));

    // 사용자에게 저장되었음을 알리는 메시지를 표시할 수도 있습니다.
    alert("일기가 성공적으로 저장되었습니다.");

    window.location.href = "home.html";
  });
});

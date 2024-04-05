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

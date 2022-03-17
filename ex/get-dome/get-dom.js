// const $postTitle = document.getElementById('post-title');
// const $postTitleTop = document.querySelector('.post-title-top');
// const $postTitle = document.querySelector("[data-name='post-title']");

// setTimeout(function() {
//   $postTitle.style.color = 'red';
// }, 2000);


const $postItemList = document.querySelectorAll('.content-item');

let i = 1;
$postItemList.forEach(function($item) {
  setTimeout(function() {
    $item.style.color = 'red';
  }, 3000);
  i++;
});

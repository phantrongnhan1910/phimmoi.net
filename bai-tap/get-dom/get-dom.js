/**
 * b1: Sau khoảng thời gian 5s
 *      + thay đổi màu nền của wrapper thành màu vàng
 *      + thay đối width của wrapper thành 200px
 *      + thay đổi height của wrapper thành 600px
 *
 * b2: Sau khoảng thời gian 4s
 *      - Thay đổi màu sắc của tất cả content-item thành màu đỏ
 * b3: Sau khoảng khoảng thời gian b2*2
 *      - Đổi chiều chữ của tất cả content-item
 */
//content post 1 -> 1 tsop tnetnoc
// deadline bt -> tối mai

const $wrapper     = document.getElementById('wrapper');
const $contentList = document.querySelectorAll('.content-item');

// thay đổi màu nền của wrapper thành màu vàng
setTimeout(function() {
    $wrapper.style.backgroundColor = '#FFFF00';
} , 5000);

// thay đối width của wrapper thành 200px
setTimeout(function() {
    $wrapper.style.width = '200px';
}, 5000);
// thay đổi height của wrapper thành 600px
setTimeout(function() {
    $wrapper.style.height = '600px';
}, 5000);

const timer = 4000;

// b2: Sau khoảng thời gian 4s
//  - Thay đổi màu sắc của tất cả content-item thành màu đỏ
$contentList.forEach(function($item) {
    setTimeout(function() {
        $item.style.color = 'red';
    }, timer);
});

  /**
   * b3: Sau khoảng khoảng thời gian b2*2
  - Đổi chiều chữ của tất cả content-item
  //content post 1 -> 1 tsop tnetnoc
    */

  /**
   * b1: get dom
   * b2: get text from dom
   * b3: reverse text
   * b4: append text to dom
   */

setTimeout(function() {
    $contentList.forEach(function($item) {
        const text = $item.textContent;
        const reverseText = reverseString(text);
        $item.innerText = reverseText;
    });
}, timer * 2);

function reverseString(text) {
  // b1: chuyển tất cả các ký tự trong string thành từng phần tử của array
  const textArr = text.split('');
  // b2: đảo ngược tất cả những phần tử trong array
  const textArrRevr = textArr.reverse();
  // b3: chuyển array đảo ngược thành chuổi.
  const textRevr = textArrRevr.join('');
  // b4: Trả về lại đoạn text đã đảo ngược
  return textRevr;
}

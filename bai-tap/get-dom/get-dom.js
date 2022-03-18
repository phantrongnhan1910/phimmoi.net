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
const $contentItem = document.querySelectorAll('.content-item');

// thay đổi màu nền của wrapper thành màu vàng
setTimeout(function(){
    $wrapper.style.backgroundColor = '#FFFF00';
} , 5000);

// thay đối width của wrapper thành 200px
setTimeout(function(){
    $wrapper.style.width = '200px';
}, 5000);
// thay đổi height của wrapper thành 600px
setTimeout(function(){
    $wrapper.style.height = '600px';
}, 5000);

// b2: Sau khoảng thời gian 4s
    //  - Thay đổi màu sắc của tất cả content-item thành màu đỏ
$contentItem.forEach(function($item){
    setTimeout(function(){
        $item.style.color = 'red';
    }, 4000);
});
    /**
     * b3: Sau khoảng khoảng thời gian b2*2
    - Đổi chiều chữ của tất cả content-item
    //content post 1 -> 1 tsop tnetnoc
     */

setTimeout(function(){
        
    },(4000*2));

    
 var tab_list = document.querySelector('.tab_list');
 var lis = tab_list.querySelectorAll('li');
 var items = document.querySelectorAll('.item');
 //for 循环绑定点击事件
 for (var i = 0; i <lis.length; i++) {
    lis[i].setAttribute('index', i);
     lis[i].onclick = function() {
         //1.上的模块选项卡 点击某一个，当前这一个底色会是红色，其余不变（排他思想）修改类名的方式
         //干掉所有人 其余的li清除 class这个类
         for (var i = 0; i< lis.length; i++) {
             lis[i].className = '';
         }
         //留下我自己 
         this.className = 'current';
         //2.下面显示内容模块
         var index = this.getAttribute('index');
         //干掉所有人 让其余的item 这些div隐藏
         for (var i = 0; i < items.length; i++) {
             items[i].style.display = 'none';
         }
         //留下我自己 让对应的item 显示出来
         items[index].style.display = 'block';
     }
 }
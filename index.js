let number = window.prompt('好きな数字 1 ～ 9 を入力してください');

if(number > 9){ //もしも数字が9より大きかったらエラー分を表示させたい
    let comment = '数字が9よりも大きいです。';
    number = window.prompt('もう一度入力お願いします。');
}

if(number == 1) {
    document.write('あなたが入力したのは １です。');
} else if(number == 2) {
    document.write('あなたが入力したのは ２です。');
} else if(number == 3) {
    document.write('あなたが入力したのは ３です。');
} else if(number == 4) {
    document.write('あなたが入力したのは ４です。');
} else if(number == 5) {
    document.write('あなたが入力したのは ５です。');
} else if(number == 6) {
    document.write('あなたが入力したのは ６です。');
} else if(number == 7) {
    document.write('あなたが入力したのは ７です。');
} else if(number == 8) {
    document.write('あなたが入力したのは ８です。');
} else if(number == 9) {
    document.write('あなたが入力したのは ９です。');
}
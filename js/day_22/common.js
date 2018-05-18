window.onload = function(){
    var radioA = document.getElementById('radio-a');
    var radioB = document.getElementById('radio-b');
    var numA = document.getElementById('num-a');
    var numB = document.getElementById('num-b');
    var btns = document.querySelectorAll('button');
    var para = document.getElementById('result');

    // 当前的输入框是否是选中状态
    function radioCheck(check){
        if(check.checked){
            return true;
        }else{
            return false;
        }
    }
    // 当前输入框里的内容是否为数字
    function num(obj){
        // isNaN(obj.value)不能判断空的字符串或者空格，会作为0处理
        // 而parseInt与parseFloat是返回一个错误消息，这个isNaN检查不严密而导致的。
        if(!isNaN(obj.value) && parseFloat(obj.value).toString() !== 'NaN'){
            return true;
        }else{
            return false;
        }
    }

    btns[0].addEventListener('click', function(){
        if(radioCheck(radioA) && num(numA)){
            para.innerHTML = '恭喜，你输入的是数字！';
        }else if(radioCheck(radioB) && num(numB)){
            para.innerHTML = '恭喜，你输入的是数字！';
        }else{
            para.innerHTML = '你输入的内容有误，请输入数字！'
        }
    });
    btns[1].addEventListener('click', function(){
        if(num(numA) && num(numB)){
            var a = Number(numA.value);
            var b = Number(numB.value);
            var lens = numA.value.split('.')[1].length;
            b = b > lens ? lens : b;
            // toFixed是Number类型的方法
            para.innerHTML = a.toFixed(parseInt(b));
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
    btns[2].addEventListener('click', function(){
        if(radioCheck(radioA) && num(numA)){
            para.innerHTML = Math.abs(numA.value);
        }else if(radioCheck(radioB) && num(numB)){
            para.innerHTML = Math.abs(numB.value);
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
    btns[3].addEventListener('click', function(){
        if(radioCheck(radioA) && num(numA)){
            para.innerHTML = Math.ceil(numA.value);
        }else if(radioCheck(radioB) && num(numB)){
            para.innerHTML = Math.ceil(numB.value);
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
    btns[4].addEventListener('click', function(){
        if(radioCheck(radioA) && num(numA)){
            para.innerHTML = Math.floor(numA.value);
        }else if(radioCheck(radioB) && num(numB)){
            para.innerHTML = Math.floor(numB.value);
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
    btns[5].addEventListener('click', function(){
        if(radioCheck(radioA) && num(numA)){
            para.innerHTML = Math.round(numA.value);
        }else if(radioCheck(radioB) && num(numB)){
            para.innerHTML = Math.round(numB.value);
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
    btns[6].addEventListener('click', function(){
        if(num(numA) && num(numB)){
            para.innerHTML = Math.max(numA.value, numB.value);
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
    btns[7].addEventListener('click', function(){
        if(num(numA) && num(numB)){
            para.innerHTML = Math.min(numA.value, numB.value);
        }else{
            console.log('请在输入框内输入数字哦！');
        }
    });
}
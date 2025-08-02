let dis=document.getElementById('result')
function getValue(value){
    dis.textContent+=value;
}

function resetAll(){
    dis.textContent='';
}

function resetC(){
  let temp= dis.textContent.slice(0 , -1);
  dis.textContent=temp
}

function finall(){
    let val =dis.textContent
    dis.textContent=eval(val);
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    // اعداد و ممیز
    if (/\d/.test(key) || key === '.') {
        getValue(key);
    }
    // عملگرها
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        getValue(key);
    }
    // مساوی
    else if (key === 'Enter') {
        finall();
    }
    else if (key === '=') {
        finall();
    }
    // پاک کردن
    else if (key === 'a' || key === 'A' || key === 'Escape') {
        resetAll();
    }
      else if (key === 'c' || key === 'C' || key === 'Escape') {
        resetC();
    }
     // برای حالت تقسیم با کلید /
     else if (key === '/') {
        getValue('/');
    }
    // برای حالت ضرب با کلید *
     else if (key === '*') {
        getValue('*');
    }

});
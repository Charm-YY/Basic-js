const $title = document.querySelector('.hello:first-child h1'); // class hello 에서 처음 h1 선택

const $hello = document.querySelector('.hello h1:nth-of-type(2)'); // class hello 에서 두번째 h1 선택

function handleTitleClick($element, color){ // 클릭 했을때 파란색으로 바꿔줘
    $element.style.color = color;
}

function handleMouseEnter($element, name){ // 마우스를 가져가면 텍스트를 바꿔줘
    $element.innerHTML = `Hi, ${name}`;
}

function handleMouseLeave($element, name){ // 마우스를 떼면 텍스트를 바꿔줘
    $element.innerHTML = `Bye, ${name}`;
}

$title.addEventListener('click', ()=> handleTitleClick($title, 'gray'));
$title.addEventListener('mouseenter', () => handleMouseEnter($title, 'JavaScript'));
$title.addEventListener('mouseleave', () => handleMouseLeave($title, 'JavaScript'));

$hello.addEventListener('click', ()=> handleTitleClick($hello, 'blue'));
$hello.addEventListener('mouseenter', () => handleMouseEnter($hello, 'CSS'));
$hello.addEventListener('mouseleave', () => handleMouseLeave($hello, 'CSS'));
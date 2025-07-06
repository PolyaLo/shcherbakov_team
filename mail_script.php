<?php
$name = $_POST['name'];
$tel = $_POST['telephone'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$tel = urldecode($tel);

$name = trim($name);
$tel = trim($tel);



if (mail("polina.1009@yandex.ru",
     "Заявка с сайта:",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "From: polina.1009@yandex.ru\r\n")
){
     header("Location: /index.html");
}

else {
     echo ("Error");
}
?>
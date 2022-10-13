<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    //Принимаем постовые данные
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $msk = $_POST['msg'];

//Тут указываем, на какой ящик посылать письмо

    $to = "AndruhinaDaria@yandex.ru";
    //$to = "da@megasite.site";
//Далее идет тема и само сообщение
// Тема письма
    $subject = "Заявка с сайта ";
// Сообщение письма


    $message = "
Пользователь оставил заявку на вашем сайте<br>
Данные, которые указал Пользователь:<br>
Имя: " . htmlspecialchars($name) . "<br>
Телефон: <a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a><br>
сообщение:".$msk;

// Отправляем письмо при помощи функции mail();
    $headers = "From: andruhinadaria@yandex.ru\r\nContent-type: text/html; charset=UTF-8\r\nBcc:stebelkuhny@yandex.ru\r\n";
    mail($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт (если без ajax)

    exit();

} else {
    // Ошибка! Допустим только AJAX запрос!
}


?>

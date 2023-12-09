const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обработка POST-запроса от формы
app.post('/submit-form', (req, res) => {
    // Получение данных из формы
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Ваши действия с данными (например, отправка почты)

    // Запись данных в файл
    const dataToWrite = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
    fs.appendFile('form-data.txt', dataToWrite, (err) => {
        if (err) {
            console.error('Ошибка при записи данных в файл:', err);
            res.status(500).send('Ошибка при обработке запроса.');
        } else {
            console.log('Данные успешно записаны в файл.');
            res.send('Форма успешно отправлена');
        }
    });
});

// Обработка POST-запроса
app.post('/', (req, res) => {
    const dataFromPost = req.body;
    res.send(`Это ответ от вашего сервера. Получены данные из POST-запроса: ${JSON.stringify(dataFromPost)}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});

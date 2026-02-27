const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: 'John Boe',
                email: 'K0tHt@example.com'
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'VYQ4b@example.com'
            },
            {
                id: 3,
                name: 'Virat kohli',
                email: 'EzTtS@example.com'
            },
            {
                id: 4,
                name: 'King kohli',
                email: 'tZyHw@example.com'
            }
        ]
    );
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
const path = require('path');
const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const SortMiddleware = require('./app/middleware/SortMiddleware');


const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'))
app.use(SortMiddleware);
//HTTP loger
app.use(morgan('tiny'));
//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'fas fa-sort',
                    asc: 'fas fa-sort-amount-down-alt',
                    desc: 'fas fa-sort-amount-down'
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }
                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`;
            }
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

//

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
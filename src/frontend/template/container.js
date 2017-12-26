const querySelector = (query) => document.querySelector(query);

const createElement = (type, id) => document.createElement(type, id);

const create = (id = 'root') => {
    document.body.insertBefore(createElement('div', id), querySelector('script'));
    return querySelector(`div[is=${id}]`)
};

export default () => create();

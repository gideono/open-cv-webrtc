const querySelector = (query) => document.querySelector(query);

const create = (id = 'root') => {
    document.body.insertBefore(document.createElement('div', id), querySelector('script'));
    return querySelector(`div[is=${id}]`)
};

export default () => create();

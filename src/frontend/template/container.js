const querySelector = (query) => document.querySelector(query);

const setAttribute = (element, name, value) => name ? (element.setAttribute(name, value), element) : element;

export const create = (type, attribute, value) =>
    setAttribute(document.createElement(type), attribute, value);

export const container = (type = 'div', attribute = 'id', value = 'root') =>
    document.body.insertBefore(create(type, attribute, value), querySelector('script'));


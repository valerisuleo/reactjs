import _ from 'lodash';

// items: []; pageNumber: number; pageSize: number;
export function paginate(items, pageNumber, pageSize) {
    console.log('items', items);
    
    const indexStart = (pageNumber - 1) * pageSize;
    
    return _(items).slice(indexStart).take(pageSize).value();
}
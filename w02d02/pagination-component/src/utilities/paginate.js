import _ from 'lodash';

// items: []; pageNumber: number; pageSize: number;
export function paginate(items, pageNumber, pageSize) {
    const indexStart = (pageNumber - 1) * pageSize;
    
    return _(items).slice(indexStart).take(pageSize).value();
}
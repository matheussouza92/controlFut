'use strict';

export const HEADER_ITEMS = {
    CONVIDADO: 'CONVIDADO',
    SORTEIO: 'SORTEIO',
    BLANK: 'BLANK',
    EDITAR: 'EDITAR',
    COMPARTILHAR: 'COMPARTILHAR'
};

export const ITEMS = [
    { ordination: 1, desc: 'convidado', identifier: HEADER_ITEMS.CONVIDADO, icon: 'user-plus' },
    { ordination: 2, desc: 'sorteio', identifier: HEADER_ITEMS.SORTEIO, icon: 'random' },
    { ordination: 3, desc: '', identifier: HEADER_ITEMS.BLANK, icon: '' },
    { ordination: 4, desc: '', identifier: HEADER_ITEMS.BLANK, icon: '' },
    { ordination: 5, desc: 'editar', identifier: HEADER_ITEMS.EDITAR, icon: 'edit' },
    { ordination: 6, desc: 'compartilhar', identifier: HEADER_ITEMS.COMPARTILHAR, icon: 'share-square' }
];

import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Issue Voucher', '/pages/form-elements/validations', null, 'credit-card', null, false, 0),
    new Menu (2, 'View Previous Transactions', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 0),
    new Menu (3, 'Contact Us', '/pages/form-elements/layouts', null, 'envelope', null, false, 0),
]

export const horizontalMenuItems = [ 
    new Menu (1, 'Issue Voucher', '/pages/form-elements/validations', null, 'credit-card', null, false, 0),
    new Menu (2, 'View Previous Transactions', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 0),
    new Menu (3, 'Contact Us', '/pages/form-elements/layouts', null, 'envelope', null, false, 0),
]

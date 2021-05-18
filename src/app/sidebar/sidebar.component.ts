import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [

    { path: '/dashboard',     title: 'Dashboard',         icon:'fas fa-chart-pie',       class: '' },
    { path: '/clientes',      title: 'Clientes',          icon:'fas fa-user-alt',       class: '' },
    { path: '/contratos',     title: 'Contratos',         icon:'fas fa-file-contract',       class: '' },
    { path: '/usuario',       title: 'Usuário',           icon:'fas fa-id-card-alt',       class: '' },
    { path: '/configuracoes', title: 'Configurações',     icon:'fas fa-tools',       class: '' },





    // { path: '/icons',         title: 'Exemple Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Exemple Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Exemple Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'Exemple User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Exemple Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Exemple Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Exemple Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

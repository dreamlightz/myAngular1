import { Component } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'TEST';
    menuItem = true;
    btnList = <any>[
        {
            btnText: 'หน้าหลัก',
            routerLink: '/xyz',
            iconClass: 'fas fa-home',
        },
        {
            btnText: 'จัดเตรียมข้อมูลแบบ',
            routerLink: '/xyz',
            iconClass: 'far fa-file-alt',
        },
    ];


    constructor() {
        console.log('LnwM');

        // $('body').on('click', '.hideBtn', function(e: any){
        //     console.log( e.target );
        // });
    }
    slideLeft(e: any){
        let thisElem = e.target;
        this.menuItem = (this.menuItem ? false : true);
    }
}
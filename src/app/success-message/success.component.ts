import { Component } from '@angular/core';

@Component({
    selector:'success-message',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})

export class successcomponent{
    title =  '';
    enableButton = false;
    inputvalue = '';
    username:string = '';
    number = 5;
    status:string = 'Offline';
    value:number = 0;
    toggle = false;
    log: any[] = [];

    constructor()
    {
        this.value = Math.random();
        console.log(this.value);
        this.status = this.value > 0.5 ? 'Online' : 'Offline';

        // setTimeout(() => {
        // this.enableButton = true;
        // },2000);
    }

    onbuttonclick(){
        this.title = 'success-message';
    }

    keyevent(event: Event){
        this.inputvalue = (<HTMLInputElement>event.target).value;
        this.enableButton = true;
    }

    getColor(){
       return this.status === 'Online' ? 'green' : 'red';
    }

    toggleDetails(){
        this.toggle = !this.toggle;
        this.log.push(this.log.length + 1);
    }
}

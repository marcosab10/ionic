import { Component } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor (private push: Push){
    // to check if we have permission
  this.push.hasPermission()
    .then((res: any) => {

      if (res.isEnabled) {
        alert('We have permission to send push notifications');

        const options: PushOptions = {
               android: {},
               ios: {
                   alert: 'true',
                   badge: true,
                   sound: 'false'
               },
               windows: {},
               browser: {
                   pushServiceURL: 'http://push.api.phonegap.com/v1/push'
               }
            }

          const pushObject: PushObject = this.push.init(options);


          pushObject.on('notification').subscribe((notification: any) => {
              alert(notification.message);

          });

          pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));



      } else {
        alert('We do not have permission to send push notifications');
      }

    });
  }

}

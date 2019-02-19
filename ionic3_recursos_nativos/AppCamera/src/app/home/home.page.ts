import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  base64Image:string;

  constructor(private camera: Camera, private tts: TextToSpeech) {

  }

  ngOnInit(){
    this.tts.speak({text:'Olá, Marcos! Não se preeocupe você vai ganhar muito dinheiro com criptomoedas.', locale:'pt-BR'})
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

  abreCamera(){
    let  config: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };


    this.camera.getPicture(config).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }


}

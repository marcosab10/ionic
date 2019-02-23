import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  base64Image:string;
  msg:string;

  constructor(public navCtrl: NavController ,private camera: Camera, private tts: TextToSpeech,
    private speechRecognition: SpeechRecognition) {

  }

  ngOnInit(){
    this.tts.speak({text:'Olá, Marcos! O que você deseja?', locale:'pt-BR'})
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

  abreCurso(){
    this.navCtrl.navigateForward('/curso');
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

  comandoDeVoz(){
    this.msg = "";
    // Check feature available
    this.speechRecognition.isRecognitionAvailable().then((available: boolean) => {
      if (available){
        // Check permission
        this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
          if (hasPermission){

            // Start the recognition process
            this.speechRecognition.startListening({language: 'pt-BR'}).subscribe(
              (matches: string[]) => {
                for (let item of matches){
                  this.msg += item + ' ';
                }
                if(matches[0] == "tirar foto"){
                  this.abreCamera();
                }

              },
              (onerror) => alert('Error: ' + onerror)
            );
          } else {
            // Request permissions
            this.speechRecognition.requestPermission().then(
                () => {
                  this.comandoDeVoz();
                },
                () => {
                  this.msg = "Você negou a permissão para comando de voz."
                }
              )
          }
        });
      } else{
        this.msg = "Recurso de comando não está disponível."
      }
    });
  }


}

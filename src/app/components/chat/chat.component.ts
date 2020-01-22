import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string = '';
  elemento: any;

  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes()
                    .subscribe(() => {
                      setTimeout(() => {
                        this.elemento.scrollTop = this.elemento.scrollTopHeight;
                      }, 20);
                    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    if (this.mensaje.length > 0) {
      this.chatService.agregarMensaje(this.mensaje)
                      .then(() => this.mensaje = '')
                      .catch(error => console.log(error));
    }
  }

}

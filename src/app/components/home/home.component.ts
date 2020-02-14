import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSeleccionado: any;

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe(videos => {
      console.log(videos);
      this.videos = videos;
    });
  }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.videoSeleccionado = video;
    console.log('Video seleccionado', video);
  }

  cerrarModal() {
    this.videoSeleccionado = null;
    $('#exampleModal').modal('hide');
  }

  cargarVideos() {
    this.youtubeService.getVideos().subscribe(videos => {
      console.log(videos);
      this.videos = [...this.videos, ...videos];
    });
  }
}

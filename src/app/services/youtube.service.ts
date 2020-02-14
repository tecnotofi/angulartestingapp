import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyB8BqSY0hIPlTzPMS27wC5gZ7kuGsIVWH4';
  private playlist = 'UULNgu_OupwoeESgtab33CCw';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;

    let params = new HttpParams();

    if (this.nextPageToken) {
      params = new HttpParams()
                  .set('part', 'snippet')
                  .set('maxResults', '10')
                  .set('playlistId', this.playlist)
                  .set('key', this.apikey)
                  .set('pageToken', this.nextPageToken);
    }
    else {
      params = new HttpParams()
                  .set('part', 'snippet')
                  .set('maxResults', '10')
                  .set('playlistId', this.playlist)
                  .set('key', this.apikey);
    }

    return this.http.get(url, { params })
                    .pipe(map((response: any) => {
                      console.log(response);
                      this.nextPageToken = response.nextPageToken;
                      console.log(this.nextPageToken);

                      let videos: any[] = [];
                      for (const video of response.items) {
                        videos.push(video.snippet)
                      }

                      return videos;
                    }));
  }
}

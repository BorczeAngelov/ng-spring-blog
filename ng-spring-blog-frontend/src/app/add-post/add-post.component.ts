import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostPayload } from './post-payload';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(
    private addpostService: AddPostService,
    private router: Router) {

    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });

    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
  }

  addPost() {

    if (this.addPostForm) {

      this.postPayload.content = this.addPostForm.get('body')?.value;
      this.postPayload.title = this.addPostForm.get('title')?.value;

      this.addpostService.addPost(this.postPayload)
        .subscribe(
          data => {
            console.log('Response from add post.', data);
            this.router.navigateByUrl('/');
          }, error => {
            console.log('Failure response from add post.');
          });

    }
  }
}
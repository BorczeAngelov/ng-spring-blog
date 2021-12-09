import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPostService } from '../add-post.service';
import { PostPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  permaLink!: Number;
  $post: Observable<PostPayload> | undefined;

  constructor(private router: ActivatedRoute, private postService: AddPostService) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.$post = this.postService.getPost(this.permaLink);
  }
}
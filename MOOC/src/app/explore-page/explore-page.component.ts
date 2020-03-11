import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {
  coursesData = [];
  mailId = '';
  index = 0;
  id = '';
  course_index = '';


  constructor(private route: ActivatedRoute, private http1: HttpClient, private router: Router) { }
  url = 'https://api.mlab.com/api/1/databases/htata/collections/web_lab_1?apiKey=bSL6owZlWxFJFxmKC-o3eL92NCtIS04Z';
  ngOnInit() {

    this.mailId = this.route.snapshot.params['id'];
    this.http1.get(this.url).subscribe((res: any) => {
      this.index = res.findIndex(e => e.email === this.mailId);
      this.id = res[this.index]._id['$oid'];

      let _courses = res[this.index].courses;
      console.log(_courses);
      this.coursesData = Object.keys(_courses).map(function (k) {
        const i = _courses[k];
        const imageUrl = '../../assets/' + i.coursename + '.png';
        console.log(imageUrl);
        return {course: i.coursename, category: i.courseCategory, credits: i.credits, examDate: i.examDate,
          midTermDate: i.midTermDate, imageurl: imageUrl};
      });

    });
  }

  ViewProfile = function() {
    this.router.navigate(['/profile-page',  this.route.snapshot.params['id']]);
  };
  Hompage = function() {
    this.router.navigate(['/home-page',  this.route.snapshot.params['id']]);
  };
  SignOut = function() {
    this.router.navigateByUrl('/login-page');
  };
  explore = function() {
    this.router.navigate(['/explore-page',  this.route.snapshot.params['id']]);
  };
  music = function() {
    this.router.navigate(['/music-page',  this.route.snapshot.params['id']]);
  };
  bigdata = function() {
    this.router.navigate(['/bigdata-page',  this.route.snapshot.params['id']]);
  };
  webmobile = function() {
    this.router.navigate(['/webmobile-page',  this.route.snapshot.params['id']]);
  };
  business = function() {
    this.router.navigate(['/business-page',  this.route.snapshot.params['id']]);
  };
  cloud = function() {
    this.router.navigate(['/cloud-page',  this.route.snapshot.params['id']]);
  };
  photoshop = function() {
    this.router.navigate(['/photoshop-page',  this.route.snapshot.params['id']]);
  };
}

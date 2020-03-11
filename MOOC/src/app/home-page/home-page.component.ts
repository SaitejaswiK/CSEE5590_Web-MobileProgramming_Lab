import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  coursesData = [];
  mailId = '';
  index = 0;
  id = '';

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
        return {course: i.coursename, category: i.courseCategory, credits: i.credits, ratings: i.ratings};
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

}

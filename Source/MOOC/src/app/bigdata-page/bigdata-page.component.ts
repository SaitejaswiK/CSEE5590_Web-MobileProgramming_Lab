import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bigdata-page',
  templateUrl: './bigdata-page.component.html',
  styleUrls: ['./bigdata-page.component.css']
})
export class BigdataPageComponent implements OnInit {
  courseName = 'Bigdata Course';
  courseCategory = 'Bigdata';
  credits = '3';
  ratings = '4.6'
  constructor(private route: ActivatedRoute, private http1: HttpClient, private router: Router) { }
  url = 'https://api.mlab.com/api/1/databases/htata/collections/web_lab_1?apiKey=bSL6owZlWxFJFxmKC-o3eL92NCtIS04Z';
  ngOnInit() {
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
  enroll_bigdata = function() {
    const mailId = this.route.snapshot.params['id'];
    console.log('mailid', mailId);
    this.http1.get(this.url).subscribe((res: any) => {
      const index = res.findIndex(e => e.email === mailId);
      const id = res[index]._id['$oid']
      const url1 = 'https://api.mlab.com/api/1/databases/htata/collections/web_lab_1/' + id + '?apiKey=bSL6owZlWxFJFxmKC-o3eL92NCtIS04Z';
      console.log(id);
      console.log(res[index].courses);
      const coursesublist = [{coursename : this.courseName, courseCategory: this.courseCategory,
        credits : this.credits , ratings: this.ratings}];

      if ( res[index].courses !== undefined) {
        res[index].courses = res[index].courses.concat(coursesublist);
        console.log(res[index].courses);
      } else {
        res[index].courses = coursesublist;
      }
      console.log(coursesublist);


      const values = { $set : { firstName : res.firstName, lastName : res.lastName,
          password : res.password, email : res.email,
          number : res.phonenumber, courses : res[index].courses }
      } ;
      // const values = { $set : { "courses.$.courseName.$" : this.courseName } };
      this.http1.put(url1 + '&q={' + '_id:' + id + '}', values).subscribe((putResult: any) => {
        console.log(putResult);
      });
      this.courseName = 'Bigdata Course';
      this.courseCategory = 'Bigdata';
      this.credits = '3';
      this.ratings = '4.6';

      this.router.navigate(['/home-page',  this.route.snapshot.params['id']]);
    });
  };



}

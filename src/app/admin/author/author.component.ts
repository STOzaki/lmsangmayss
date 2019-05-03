import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PagerService } from '../../services/pager.service';
import { AdminService } from '../../services/admin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private pagerService: PagerService,
    private adminService: AdminService,
    private modalService: NgbModal
  ) {}
  authors: any;
  authorsSize = 1;
  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  private modalReference: NgbModalRef;
  errorMsg: string = '';
  private closeResult: any;
  author = {
    authorName: ''
  };
  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.adminService.getAllAuthors('').subscribe(res => {
      this.authors = res;
      this.authorsSize = this.authors.length;
      this.setPage(1);
    });
  }

  searchAuthors(event) {
    this.adminService.getAllAuthors(event.target.value).subscribe(res => {
      this.authors = res;
      this.authorsSize = this.authors.length;
      this.setPage(1);
    });
  }

  deleteAuthor(id) {
    this.adminService.deleteAuthor(id).subscribe(res => {
      this.authors = res;
      this.authorsSize = this.authors.length;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.authors.length, page);

    // get current page of items
    this.pagedItems = this.authors.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then(
      result => {
        this.errorMsg = '';
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.errorMsg = '';
        this.closeResult = `Dismissed '`;
      }
    );
  }

  createAuthor() {
    alert(this.author.authorName);
    console.log(this.author);
  }
}

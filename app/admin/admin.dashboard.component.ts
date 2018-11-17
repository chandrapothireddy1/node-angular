import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-dashboard',
    templateUrl: 'admin-dashboard.component.html',
    styleUrls:['./dashboard.component.css','./overide.css']
})

export class AdminDashboardComponent {
    users: User[];
    msg: string;
    perpage: any;
    perpagenum: number;
    maxItemsPerPage: number;
    currentPageNum: number;
    resdatacountnew: number;
    maxPageNum: number;
    pageNums2Disp: any;
    minPages2Disp: number = 1;
    maxPages2Disp: number = 5;
    constructor(private ad: AdminService, private router: Router) {
        this.perpage = ["5", "20", "100", "ALL"];
        this.perpagenum = this.perpage[0];
        this.ad.listUsersPage(1, this.perpagenum).subscribe((data) => {
            if (data) {

                this.users = <User[]>data;

                this.setScopeVars(1, this.users);
            }
        })

    }

    setScopeVars(pageNumber, response) {
        this.users = response.users;
        this.maxItemsPerPage = 5;
        this.currentPageNum = pageNumber;
        this.resdatacountnew = response.count;

        this.maxPageNum = Math.max(1, Math.ceil(this.resdatacountnew / this.maxItemsPerPage));

        this.pageNums2Disp = this.genPageNums(this.currentPageNum, this.resdatacountnew);

    }


    // Generate page numbers
    genPageNums = function (currentPageNum, count) {
        var min = Math.max(this.minPages2Disp, currentPageNum - Math.ceil(this.maxPages2Disp / 2) + 1);
        var max = Math.max(this.maxPages2Disp, currentPageNum + Math.ceil(this.maxPages2Disp / 2) - 1);
        if (max > this.maxPageNum) {
            max = this.maxPageNum;
        }

        var pageNums2Disp = [];
        if (count !== 0) {
            for (var i = min; i <= max; i++) {
                pageNums2Disp.push(i);
            }
        }

        return pageNums2Disp;
    };


    getPage = function (pageNumber) {

        if (this.currentPageNum != pageNumber) {
            this.ad.listUsersPage(pageNumber, this.perpagenum).subscribe((data) => {
                this.users = <User[]>data;

                this.setScopeVars(pageNumber, this.users);
            })
        }

    }

    currDisabled = function (currentPageNum) {
        if (this.currentPageNum != currentPageNum) {
            return false;
        }
        return true;
    };

    firstDisabled = function () {
        if (this.currentPageNum != this.minPages2Disp) {
            return false;
        }
        return true;
    };

    prevDisabled = function () {
        if (this.currentPageNum > this.minPages2Disp) {
            return false;
        }
        return true;
    };

    nextDisabled = function () {
        if (this.currentPageNum < this.maxPageNum) {
            return false;
        }
        return true;
    };

    lastDisabled = function () {
        if (this.currentPageNum != this.maxPageNum) {
            return false;
        }
        return true;
    };

    // Get first page
    first = function (dashboard) {
        this.getPage(1);
    };

    // Get previous page
    previous = function (dashboard) {
        this.getPage(this.currentPageNum - 1);
    };

    // Get next page
    next = function (dashboard) {
        this.getPage(this.currentPageNum + 1);
    };

    // Get last page
    last = function (dashboard) {
        this.getPage(this.maxPageNum);
    };




    logout() {
        this.ad.logoutUser().subscribe((data) => {
            if (data) {
                this.router.navigate(['/admin/login']);
            }
        })
    }






}
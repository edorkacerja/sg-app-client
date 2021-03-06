
import {Component, OnInit,ViewEncapsulation} from "@angular/core";
import {Listing} from "../../../shared/listing.model";
import {Internship} from "../../../shared/models/internship.model";
import {InternshipsService} from "../../../shared/services/internships.service";
import {Internship} from "../../../shared/models/internship.model";
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [InternshipsService],
    styleUrls: ['./internships.styles.css'],
    template: require('./internships.template.pug'),

})

export class AdminInternships implements OnInit{
    listing: Listing<Internship>;
    public internship:Internship;
    public currentPage:number = 1;
    public selectedInternship:Internship;
    public isCollapsed:boolean;

    constructor(private _service:InternshipsService) {
        this.internship = new Internship();
        this.isCollapsed = true;
    }

    ngOnInit() {
        this.listing = new Listing<Internship>();
        this.loadInternships(1, 10);
    };

    public pageChanged(event:any):void {
        this.loadInternships(event.page, event.itemsPerPage);
    };

    private loadInternships(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }
    selectInternship(internship:Internship){
        this.selectedInternship = internship;
        this.isCollapsed = false;
    }

    addInternship($event) {
        if($event.internship.id){
            this._service.updateInternship($event.internship,$event.photo,$event.internship.id).subscribe((res)=> {
                this.internship = res;
            });
        }else{
            this._service.addInternship($event.internship,$event.photo).subscribe((res)=>
                this.internship = res );
        }
    }

    deleteInternship($event) {
            this._service
                .deleteInternship($event.internship.id)
                .then(() =>  {
                    this.loadInternships(1, 10);
                });
    }

}
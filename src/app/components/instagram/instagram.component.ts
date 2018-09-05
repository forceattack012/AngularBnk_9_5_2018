import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { feed } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';
import { Feedlist } from '../../models/feedlist';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  private feeds : feed[];
  private a : string;
  constructor(private route: ActivatedRoute,private bnk : BnkService) { }

  ngOnInit() {
    this.a = this.route.snapshot.paramMap.get('name');
    this.bnk.feelList(this.a).subscribe((data: Feedlist) => {
      this.feeds = data.feeds;
    });
    


  }

}

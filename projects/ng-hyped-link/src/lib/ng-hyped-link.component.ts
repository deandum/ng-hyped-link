import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'ng-hyped-link',
  templateUrl: './ng-hyped-link.component.html',
  styleUrls: ['./ng-hyped-link.component.scss']
})
export class NgHypedLinkComponent implements OnInit, AfterViewInit {
  @Input() targetUrl: string;
  @Input() target = '_blank';

  id: string;

  siteTitle: string;
  pageTitle: string;
  image: string;
  description: string;

  private ngHypedLinkSelector: string;
  private ngHypedCardSelector: string;

  constructor() { }

  ngOnInit(): void {
    this.id = this.getRandomId();
    this.ngHypedLinkSelector = '#ng-hyped-' + this.id;
    this.ngHypedCardSelector = '#ng-hyped-card-' + this.id;
  }

  ngAfterViewInit() {
    $(this.ngHypedCardSelector).hide();
    this.getTargetMetadata(this.targetUrl, (data) => {
      if (data) {
        this.siteTitle = data.siteTitle || '';
        this.pageTitle = data.pageTitle || '';
        this.image = data.image || '';
        this.description = data.description || '';
        if (this.hasMetadata()) {
          this.showHypedLink();
        } else {
          console.log('Not enough information to create ng-hyped-link: ' +
            JSON.stringify({targetUrl: this.targetUrl, target: this.target}));
        }
      } else {
        console.log('Error creating ng-hyped-link: ' + JSON.stringify({targetUrl: this.targetUrl, target: this.target}));
      }
    });
  }

  private getRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }

  private getTargetMetadata(target: string, cb: any) {
    let siteTitle = '';
    let pageTitle = '';
    let image = '';
    let description = '';
    $.get('https://cors-anywhere.herokuapp.com/' + target, (data) => {
      siteTitle = $(data).filter('meta[property="og:site_name"]').attr('content');
      pageTitle = $(data).filter('meta[property="og:title"]').attr('content');
      image = $(data).filter('meta[property="og:image"]').attr('content');
      description = $(data).filter('meta[property="og:description"]').attr('content');

      cb({siteTitle, pageTitle, image, description});
    });
  }

  private hasMetadata() {
    return this.siteTitle !== '' || this.pageTitle !== '' || this.image !== '' || this.description !== '';
  }

  private showHypedLink() {
    $(this.ngHypedLinkSelector).on('mouseenter', (e) => {
      $(this.ngHypedCardSelector).show(200);
      $(this.ngHypedCardSelector).css({left: e.pageX, top: e.pageY + 10});
    }).on('mouseleave', () => {
      $(this.ngHypedCardSelector).hide(500);
    });
  }

}

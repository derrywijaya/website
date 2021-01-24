import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-mission',
    templateUrl: './homethree-mission.component.html',
    styleUrls: ['./homethree-mission.component.scss']
})
export class HomethreeMissionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    ourMissionImage: Image[] = [
        {
            img: 'assets/img/our-mission/img2.png'
        }
    ]
    ourMissionContent: Content[] = [
        {
            title: 'My research interest',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Apply Now',
            defaultBtnLink: 'membership-levels'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'flaticon-tick',
            title: 'Natural Language Processing'
        },
        {
            icon: 'flaticon-tick',
            title: 'Machine Learning'
        },
        {
            icon: 'flaticon-tick',
            title: 'Knowledge Base'
        },
        {
            icon: 'flaticon-tick',
            title: 'Machine Reading'
        },
        {
            icon: 'flaticon-tick',
            title: 'Information Extraction'
        }
    ]

    selectedPublication: Content[] = [
        {
            title: 'My selected publications',
            paragraphText1: 'Below is the list of my latest publications.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Apply Now',
            defaultBtnLink: 'membership-levels'
        }
    ]
    pubList: List[] = [
        {
            icon: 'flaticon-idea',
            title: 'LAL: Linguistically Aware Learning for Scene Text Recognition',
            text: 'Yi Zheng, Wenda Qin, Derry Wijaya, Margrit Betke. Proc. of ACM Multimedia 2020 (to appear)',
            link: 'mmfp0166-zhengA.pdf'
        },
        {
            icon: 'flaticon-idea',
            title: 'Multi-label and Multilingual News Framing Analysis',
            text: 'Afra Feyza Akyürek, Lei Guo, Randa Elanwar, Margrit Betke, Prakash Ishwar, Derry T. Wijaya. Proc. of ACL 2020',
            link:'2020.acl-main.763.pdf'
        }
        
    ]

}
class Image {
    img : string;
}
class Content {
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}
class List {
    icon : string;
    title : string;
    text?: string;
    link?: string;
}
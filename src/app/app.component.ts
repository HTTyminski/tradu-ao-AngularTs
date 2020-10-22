import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traducao';

  supportLanguages =['en','pt'];

  constructor(private translateService: TranslateService){
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');

    const browserlang = this.translateService.getBrowserLang();
    this.translateService.use(browserlang);
  }
  selectLang(lang: string){
    this.translateService.use(lang);
  }
}

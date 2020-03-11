import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplicationOidc2SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplicationOidc2CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplicationOidc2AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplicationOidc2HomeModule } from './home/home.module';
import { JhipsterSampleApplicationOidc2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplicationOidc2SharedModule,
    JhipsterSampleApplicationOidc2CoreModule,
    JhipsterSampleApplicationOidc2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplicationOidc2EntityModule,
    JhipsterSampleApplicationOidc2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplicationOidc2AppModule {}

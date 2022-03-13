import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExtraInfoComponent } from './components/extra-info/extra-info.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SvgComponent } from './components/svg/svg.component';
import { SectionComponent } from './components/section/section.component';
import { AsideComponent } from './components/aside/aside.component';
import { SvgSpinnerComponent } from './components/svg-spinner/svg-spinner.component';
import { ExtraInfoBtnsComponent } from './components/extra-info-btns/extra-info-btns.component';
import { CharacterComponent } from './components/templates/character/character.component';
import { PlanetComponent } from './components/templates/planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtraInfoComponent,
    HeaderComponent,
    FooterComponent,
    SvgComponent,
    SectionComponent,
    AsideComponent,
    SvgSpinnerComponent,
    ExtraInfoBtnsComponent,
    CharacterComponent,
    PlanetComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

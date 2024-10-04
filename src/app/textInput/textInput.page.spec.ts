import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { textInputPage } from './textInput.page';

describe('textInputPage', () => {
  let component: textInputPage;
  let fixture: ComponentFixture<textInputPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [textInputPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(textInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QSomosPage } from './q-somos.page';

describe('QSomosPage', () => {
  let component: QSomosPage;
  let fixture: ComponentFixture<QSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

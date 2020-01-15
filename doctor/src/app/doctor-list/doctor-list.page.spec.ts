import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorListPage } from './doctor-list.page';

describe('DoctorListPage', () => {
  let component: DoctorListPage;
  let fixture: ComponentFixture<DoctorListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBeerComponent } from './creat-beer.component';

describe('CreatBeerComponent', () => {
  let component: CreatBeerComponent;
  let fixture: ComponentFixture<CreatBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatBeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

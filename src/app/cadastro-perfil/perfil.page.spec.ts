import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPerfilPage } from './perfil.page';

describe('CadastroUsuarioPage', () => {
  let component: CadastroPerfilPage;
  let fixture: ComponentFixture<CadastroPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

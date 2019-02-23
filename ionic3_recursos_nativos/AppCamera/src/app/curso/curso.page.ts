import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service'


interface ICurso{
  titulo:string;
  descricao:string;
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  curso:ICurso = { titulo: '', descricao:'' };
  cursos:ICurso[];
  editando:boolean = false;
  cursoEditando:ICurso;

  constructor(public cursoService: CursoService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.cursos =  this.cursoService.listar();
    console.log('Chamou');
  }

  adicionar(){
    if(this.curso.titulo != "" && this.curso.descricao != "") {
      this.cursoService.adicionar(this.curso);
      this.curso = { titulo: '', descricao:'' };
    }
  }

  editarCurso(curso:ICurso){
    this.editando = true;
    this.curso = { titulo: curso.titulo, descricao: curso.descricao };
    this.cursoEditando = curso;
  }

  deletarCurso(curso:ICurso){
    this.cursoService.deletar(curso);
  }

  atualizar(){
    if(this.curso.titulo != "" && this.curso.descricao != "") {
      this.cursoService.atualizar(this.cursoEditando, this.curso);
      this.cancelar();
    }

  }

  cancelar(){
    this.editando = false;
    this.curso = { titulo: '', descricao:'' };
  }

}

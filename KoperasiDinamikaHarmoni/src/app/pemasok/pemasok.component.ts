import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PemasokService } from '../shared/pemasok.service';
import { Pemasok} from '../shared/pemasok.model';

declare var M: any;

@Component({
  selector: 'app-pemasok',
  templateUrl: './pemasok.component.html',
  styleUrls: ['./pemasok.component.css'],
  providers: [PemasokService]
})
export class PemasokComponent implements OnInit {

  constructor(public pemasokService: PemasokService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshPemasokList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.pemasokService.selectedPemasok = {
      _id: "",
      nama: "",
      pabrik: "",
      nohp: null
    };
  }

  onSubmit(form: NgForm){
    if(form.value._id == null || form.value._id == ""){
      this.pemasokService.postPemasok(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPemasokList();
        M.toast({ html: 'Data Pemasok berhasil tersimpan', classes: 'rounded'});
      });
    }else{
      this.pemasokService.putPemasok(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPemasokList();
        M.toast({ html: 'Data Pemasok berhasil diperbaharui', classes: 'rounded'});
      });
    }
    
  }

  refreshPemasokList(){
    this.pemasokService.getPemasokList().subscribe((res) => {
      this.pemasokService.pemasok = res as Pemasok[];
    });
  }

  onEdit(pemasok: Pemasok){
    this.pemasokService.selectedPemasok = pemasok;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Apakah kamu yakin akan menghapus data ini ?') == true){
      this.pemasokService.deletePemasok(_id).subscribe((res) => {
        this.refreshPemasokList();
        this.resetForm();
        M.toast({ html: 'Data sudah berhasil dihapus', classes: 'rounded' })
      });
    }
  }
}

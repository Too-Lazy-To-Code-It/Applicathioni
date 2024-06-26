import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  constructor(public _service: ServiceService) {

  }
  myFile: any;
  item = {
    name: '',
    description: '',
    price: 0,
    image: ''
  }
  selectFile(event: any) {
    this.myFile = event.target.files[0];

  }
  /*
  AddItem(){
    let data=this.item;
    this._service.createItem(data).subscribe((res: any) => {
      console.log("RESPONSE ", res);
      this.item = {
        name:'',
        description:'',
        price:0,
        image:''
      }
    }, err => { console.log("err", err) })
  }*/

  AddItem() {
    let myFormData = new FormData();
    myFormData.append('name', this.item.name);
    myFormData.append('description', this.item.description);
    myFormData.append('price', this.item.price.toString());
    myFormData.append('image', this.myFile);


    this._service.createItem(myFormData).subscribe((res: any) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product has been added sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
    }, err => {
      console.log("err", err)
    })



  }

}

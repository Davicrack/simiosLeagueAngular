import { Component, ViewEncapsulation } from '@angular/core';
import { CircuitService } from '../../../../core/services/JSON-Reader/circuit-JSON/circuit.service';
import { Circuit } from '../../../models/circuit.model';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Nationality } from '../../../models/enum/Nationality';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-circuit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    MatLabel,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-circuit.component.html',
  styleUrl: './create-circuit.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class CreateCircuitComponent {
  circuit: Circuit = {
    name: '',
    description: '',
    location: '',
    country: '',
    length: 0,
    imagePaths: ['']
  };

  circuitForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    length: new FormControl(0, [Validators.required, Validators.min(0)]),
    imagePaths: new FormControl([], Validators.required),
  })

  constructor(private circuitService: CircuitService) { }
  selectedFile: File | null = null;
  message: string | null = null;

  paises!: string[];
  selectHide = false;
  ngOnInit(){
    ///////////////////
    document.addEventListener('DOMContentLoaded', function () {
      var selectSelected = document.querySelector('.select-selected')!;
      var selectItems = document.querySelector('.select-items')!;
      var items = selectItems.querySelectorAll('div');
  
      items.forEach(function (item) {
          item.addEventListener('click', function () {
              selectSelected.textContent = this.textContent;
              selectItems.classList.add('select-hide');
          });
      });
  
      // Cierra el contenedor de opciones si se hace clic fuera del select
      document.addEventListener('click', function (event) {
        const target = event.target as HTMLElement;
        if (target && !target.closest('.custom-select')) {
            selectItems.classList.add('select-hide');
        }
      });
    });
  
    /////////////////////
    this.paises = Object.keys(Nationality).filter(key => isNaN(Number(key)));
    console.log(this.paises);
  }
  onFileChange(event : any){
    const file = event.target.files[0];
    if(file){
      this.selectedFile = file;
    }
  }
 
  upload() {
    if (this.selectedFile) {
      this.circuitService.uploadImage(this.selectedFile, `/circuit/${this.circuit.id}`).subscribe(
        (response: any) => {
          this.message = response;
        },
        (error) => {
          this.message = `Error: ${error.message}`;
        }
      );
    } else {
      this.message = 'Please select a file first.';
    }
  }

  onSubmit(): void {
    console.log(this.circuitForm.value)
    // console.log("TAMOOOOOOS " + this.circuit.name);
    
    // if (this.selectedFile) {
      
    //   console.log("TAMOOOOOOS2 " + this.circuit.name);

    //   this.circuitService.uploadImage(this.selectedFile, `/circuit/${this.circuit.name}.png`).subscribe(
        
    //     response => {
          
    //       console.log("TAMOOOOOOS3 " + this.circuit.name);
    //       console.log('Imagen subida', response);
    //       // Ajusta esto según cómo tu backend devuelve la URL de la imagen
    //       const imageUrl = response.imageUrl; // Ajusta esto según la respuesta del backend
    //       this.circuit.imagePaths.push(imageUrl); // Añade la URL a la lista de imágenes del circuito

    //       this.circuitService.addCircuit(this.circuit).subscribe(
    //         response => {
    //           console.log('Circuito creado', response);
    //           // Aquí puedes añadir alguna lógica adicional, como redireccionar o mostrar un mensaje de éxito
    //         },
    //         error => {
    //           console.error('Error al crear el circuito', error);
    //         }
    //       );
    //     },
    //     error => {
    //       console.error('Error al subir la imagen', error);
    //     }
    //   );
    // } else {
    //   console.error('No se ha seleccionado ningún archivo.');
    // }
  }
}
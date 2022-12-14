import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productimageadd',
  templateUrl: './productimageadd.component.html',
  styleUrls: ['./productimageadd.component.css']
})
export class ProductimageaddComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  selectedFile: File;
  // retrievedImage: any;
  // base64Data: any;
  // retrieveResonse: any;
  message: string;
  imageName: any;
  constructor(private httpClient: HttpClient,private productService:ProductsService) { }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    // this.httpClient.post('http://localhost:8080/products/save', uploadImageData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = 'Image uploaded successfully';
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );

    }

}

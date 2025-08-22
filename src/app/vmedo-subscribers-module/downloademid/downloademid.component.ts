import { Component, OnInit ,ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/adminservice/services.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-downloademid',
  templateUrl: './downloademid.component.html',
  styleUrls: ['./downloademid.component.css']
})
export class DownloademidComponent implements OnInit {
  userData: any=[];

  public qrCodeVal: string = null;

  iamanArray: any;
  emid:any;
  pin: any;
  username: any;
  emidUrl: any;
  createdUserData:any;
  userAddress: any;
  userPostalCode: any;
  createdUserID: any;
  createdSlNo: any;
  isPaidMember:any;
  packageName:any;
  valid_till:any;
  createdUserDetails: any;
  subscribedDate:any;

  
  constructor(private route:Router,private adminservice:ServicesService ) {  




    // this.adminservice.usersRegisteredList().subscribe(x => {
    //   this.emergencyids= x['objret'];

    //   let res = this.emergencyids.filter(m => m.hasEID==="YES");
   
    // });
    
  }

  ngOnInit(): void {

//this.extraData();

//this.qrCodeVal = `https://vmedo.com/emid?id=${this.emid}&pin=${this.pin}`;

   this.userData=  JSON.parse(window.sessionStorage.getItem('userData'));


  //  this.createdUserData = JSON.parse(window.sessionStorage.getItem('createdUserID'));
   

   this.emid=this.userData[0];
   this.pin=this.userData[1];
   this.username=this.userData[2];
   this.userAddress=this.userData[3];
   this.userPostalCode=this.userData[4];
   this.createdUserID=this.userData[5];
   this.createdSlNo=this.userData[6];
   this.isPaidMember=this.userData[7];
   this.packageName=this.userData[8];
   this.valid_till=this.userData[9];

// Assuming 'valid_till' is already assigned a value, e.g., '2024-05-13'
const validTillDate = new Date(this.valid_till);
const subscriptionYear = validTillDate.getFullYear() - 1;

const subscriptionDate = new Date(subscriptionYear, validTillDate.getMonth(), validTillDate.getDate());

this.subscribedDate = subscriptionDate.toISOString();



   sessionStorage.setItem("createdUserID", JSON.stringify(this.createdUserID));

 

    this.qrCodeVal = `${environment.applicationUrl}emid?id=${this.emid}`;

    this.adminservice.GetCreatedUserDetailsData().subscribe(x => {
      this.createdUserData= x['objret']['userName'];
     
  
    });


  }

  ngAfterViewInit(){
    setTimeout( ()=>{
     
        this.openPDF();
        // this.openPDF2();

        // this.route.navigate(['/admindashboard/emergencyid']);
       
     

    }, 1500)

     sessionStorage.removeItem('createdUserID');
  }

  


  @ViewChild('htmlData') htmlData!: ElementRef;

  @ViewChild('htmlData2') htmlData2!: ElementRef;

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA, { scale: 3 }).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4',true);
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    // PDF.save(this.createdSlNo+'-'+ this.username+'-Emergency-card');
    });
}

public openPDF2(): void {
  let DATA2: any = document.getElementById('htmlData2');
  html2canvas(DATA2, { scale: 4 }).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4',true);
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
     PDF.save(this.createdSlNo+'-'+this.username+'-Welcome-letter');
  });
}

// combined pdf
public openCombinedPDF(): void {
  // Get references to the two HTML elements
  let WelcomeLetter: any = document.getElementById('htmlData2');
  let Qrcode: any = document.getElementById('htmlData');

  // Create a new PDFDocument instance for the combined document
  const combinedPdfDoc = new jsPDF('p', 'mm', 'a4', true);

  // Define some variables for positioning the content in the PDF
  let position = 0;
  let fileWidth = 208;

  // Use html2canvas to capture the contents of the second element as an image
  html2canvas(WelcomeLetter, { scale: 3 }).then((canvas) => {
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');

    // Add the image to the first page of the combined PDF document
    combinedPdfDoc.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    position += fileHeight;

    // Use html2canvas to capture the contents of the first element as an image
    html2canvas(Qrcode, { scale: 3 }).then((canvas) => {
      let fileHeight2 = (canvas.height * fileWidth) / canvas.width;
      const FILEURI2 = canvas.toDataURL('image/png');

      // Add the second image to the second page of the combined PDF document
      combinedPdfDoc.addPage();
      combinedPdfDoc.addImage(FILEURI2, 'PNG', 0, 0, fileWidth, fileHeight2);

      // Save the combined PDF document to the user's device
      combinedPdfDoc.save(this.createdSlNo + '-' + this.username + '-Combined.pdf');
    });
  });
}



//public qrCodeVal: string = null;
public level: "L" | "M" | "Q" | "H";
public width: number;

updateLevel(newValue: "L" | "M" | "Q" | "H") {
  this.level = newValue;
}
updateQrInfo(newValue: string) {
  this.qrCodeVal = newValue;
}
updateWidth(newValue: number) {
  this.width = newValue;
}
}

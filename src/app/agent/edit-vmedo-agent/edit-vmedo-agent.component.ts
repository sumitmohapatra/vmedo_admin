import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-vmedo-agent',
  templateUrl: './edit-vmedo-agent.component.html',
  styleUrls: ['./edit-vmedo-agent.component.css']
})
export class EditVmedoAgentComponent {
  agent: any = {}; // You can strongly type this if you have an interface
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private dialogRef: MatDialogRef<EditVmedoAgentComponent>
  ) {}

  ngOnInit(): void {
    const url = `${environment.baseUrl}vadmin/FetchAgentDetailsById?AgentId=${this.data.agentId}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res && res.objorg && res.objorg.length > 0) {
          this.agent = res.objorg[0];
        }
      },
      error: (err) => {
        console.error('Failed to fetch agent details', err);
      }
    });
  }

  onSubmit(editForm:NgForm): void {
    if (editForm.invalid) return;
    const url = `${environment.baseUrl}vadmin/EditAgentDetails`;
    this.http.post(url, this.agent).subscribe({
      next: (res: any) => {
        if (res.statusCode === 200) {
          Swal.fire('Agent', 'Updated Successfully !', 'success');
          this.dialogRef.close(true); // Pass true to indicate success
        }
      },
      error: (err) => {
        console.error('Failed to update agent', err);
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

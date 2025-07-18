import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-vmedo-agent',
  templateUrl: './create-vmedo-agent.component.html',
  styleUrls: ['./create-vmedo-agent.component.css']
})
export class CreateVmedoAgentComponent {
  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<CreateVmedoAgentComponent>,
    private adminservice: ServicesService
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    const agentData = {
      AgentName: form.value.AgentName,
      AgentMobile: form.value.AgentMobile,
      AgentEmail: form.value.AgentEmail,
      AgentAddress: form.value.AgentAddress,
      AgentCity: form.value.AgentCity,
      AgentZip: form.value.AgentZip,
    };

    this.adminservice.createAgent(agentData)
      .subscribe({
        next: (res) => {
          this.dialogRef.close(true);
          Swal.fire('New Agent', 'Created Successfully !', 'success');
        },
        error: (err) => {
          console.error('Error creating agent:', err);
          alert('Failed to create agent. Please try again.');
        }
      });
  }

  onClose() {
    this.dialogRef.close();
  }
}

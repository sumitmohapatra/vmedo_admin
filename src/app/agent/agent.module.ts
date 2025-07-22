import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAgentsComponent } from './manage-agents/manage-agents.component';
import { AgentRoutingModule } from './agent-routing.module';
import { ManageVmedoAgentsComponent } from './manage-vmedo-agents/manage-vmedo-agents.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateVmedoAgentComponent } from './create-vmedo-agent/create-vmedo-agent.component';
import { EditVmedoAgentComponent } from './edit-vmedo-agent/edit-vmedo-agent.component';



@NgModule({
  declarations: [
    ManageAgentsComponent,
    ManageVmedoAgentsComponent,
    CreateVmedoAgentComponent,
    EditVmedoAgentComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    RouterModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
  ]
})
export class AgentModule { }

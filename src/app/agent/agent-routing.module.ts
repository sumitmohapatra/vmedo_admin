import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageAgentsComponent } from "./manage-agents/manage-agents.component";
import { ManageVmedoAgentsComponent } from "./manage-vmedo-agents/manage-vmedo-agents.component";
import { AgentSummaryComponent } from "./agent-summary/agent-summary.component";

const routes: Routes = [
  { path: 'manage-vmedo-agent', component: ManageVmedoAgentsComponent, children: [
    { path: 'manage-agent', component: ManageAgentsComponent },
    { path:'agent-summary', component:AgentSummaryComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AgentRoutingModule { }
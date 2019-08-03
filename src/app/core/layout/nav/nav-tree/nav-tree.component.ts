import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {ArrayDataSource, DataSource} from "@angular/cdk/collections";
import {NavFlatNode, NavJson, NavService} from "../nav.service";
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.css'],
  providers: [NavService]
})

export class NavTreeComponent implements OnInit {

  dataSource: MatTreeFlatDataSource<NavJson, NavFlatNode>;
  treeControl: FlatTreeControl<NavFlatNode>;
  hasChild: (i, node) => boolean;
  constructor(
    private navService: NavService
  ) {

    this.dataSource = navService.dataSource;
    this.treeControl = navService.treeControl;
    this.hasChild = navService.hasChild;
  }

  ngOnInit(): void {

  }

  getIcon(node) {
    if(node.expandable && node.complete) return 'done';
   return  this.treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'
  }

  getClass(node: any) {
    return node.complete?'border-green':'';
  }
}

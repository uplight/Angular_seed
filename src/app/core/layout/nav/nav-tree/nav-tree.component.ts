import {Component, OnInit} from '@angular/core';


import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {NavFlatNode, NavJson, NavService} from '@app/core/layout/nav/nav.service';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss'],
  providers: [NavService]
})

export class NavTreeComponent implements OnInit {

  dataSource: MatTreeFlatDataSource<NavJson, NavFlatNode>;
  treeControl: FlatTreeControl<NavFlatNode>;
  hasChild: (i, node) => boolean;
  tabLevel = 0;

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
    if (node.expandable && node.complete) {
      return 'done';
    }
    return this.treeControl.isExpanded(node) ? 'expand_less' : 'chevron_right'
  }

  getClass(node: any) {
    return node.complete ? 'border-green' : '';
  }

  onLeafClick(node: NavFlatNode) {
      this.tabLevel = 1;
    console.log(node);

  }

  onBackClick() {
    this.tabLevel = 0
  }


  getParentNode(node) {

    return null;
  }

  getStyle(node): string {
    const parent = this.getParentNode(node);
    return (!parent || parent.isExpanded) ? 'flex' : 'none';
  }
}

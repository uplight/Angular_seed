import {Component, OnInit} from '@angular/core';


import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {NavFlatNode, NavJson, NavService} from '@app/core/layout/nav/nav.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss'],
  providers: [NavService]
})

export class NavTreeComponent implements OnInit {

  dataSource: MatTreeFlatDataSource<NavJson, NavFlatNode>;
  dataSource2: MatTreeFlatDataSource<NavJson, NavFlatNode>;
  treeControl: FlatTreeControl<NavFlatNode>;
  hasChildren: (i, node) => boolean;
  tabLevel = 0;
  subTopic: string;

  constructor(
    private router: Router,
    private navService: NavService
  ) {

    this.dataSource = navService.dataSource;
    this.treeControl = navService.treeControl;
    this.hasChildren = navService.hasChildren;
    this.dataSource2 = navService.dataSource2;
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
    const hasSecond = this.navService.setSecond(node.path);
  //   console.log(hasSecond);
  //  console.log(node);
    const path = node.path;
    this.router.navigate(['/quest', {path}]);
    if (hasSecond) {
      this.subTopic = node.label;
      this.tabLevel = 1;
    }

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

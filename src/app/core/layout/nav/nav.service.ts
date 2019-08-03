import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {ApiConfigService} from '@app/core/services/apis/api-config.service';
import {BehaviorSubject, Observable} from 'rxjs';

export class NavTreeNode {
  children: BehaviorSubject<NavTreeNode[]>;
  constructor(public item: string, children?: NavTreeNode[]) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
  }
}


export interface NavJson {
  name: string;
  complete: boolean;
  children?: NavJson[];
}


export interface NavFlatNode {
  expandable: boolean;
  name: string;
  complete: boolean;
  level: number;
  isExpanded?: boolean;
}

@Injectable()
export class NavService {

  treeControl: FlatTreeControl<NavFlatNode> = new FlatTreeControl<NavFlatNode>(
    node => node.level, node => node.expandable);

  recursive = false;
  levels = new Map<NavTreeNode, number>();

  nav$: Observable<NavJson[]>;

  private _transformer = (node: NavJson, level: number) => {
    const hasChild = !!node.children && node.children.length > 0;
    const complete = hasChild ? node.children.every(function (item) {
      return item.complete;
    }) : node.complete;

    return {
      expandable: hasChild,
      name: node.name,
      level: level,
      complete
    };
  };

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource: MatTreeFlatDataSource<NavJson, any> = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NavFlatNode) => node.expandable;

  constructor(
    private config: ApiConfigService
  ) {
    this.nav$ = this.config.config$.pipe(map(cfg => cfg.nav));

    this.nav$.subscribe(nav => {
      console.log(nav);
      this.dataSource.data = nav;
    })
  }

  getLevel = (node: NavTreeNode): number => {
    return this.levels.get(node) || 0;
  };

  isExpandable = (node: NavTreeNode): boolean => {
    return node.children.value.length > 0;
  };

  getChildren = (node: NavTreeNode) => {
    return node.children;
  };

  transformer = (node: NavTreeNode, level: number) => {
    this.levels.set(node, level);
    return node;
  }

  hasChildren = (index: number, node: NavTreeNode): boolean => {
    return node.children.value.length > 0;
  };

  isOdd(node: NavTreeNode) {
    return this.getLevel(node) % 2 === 1;
  }

}

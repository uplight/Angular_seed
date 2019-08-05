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
  id: string;
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
  private path: {[path: string]: number};

  private _transformer = (node: NavJson, level: number) => {
    const name: string = node.name;
    const expandable = !!node.children && node.children.length > 0;
    const complete = expandable ? node.children.every(function (item) {
      return item.complete;
    }) : node.complete;

    return {
      expandable,
      name,
      level,
      complete
    };
  };

  isExpandable = (node: NavFlatNode): boolean => {
    return node.expandable
   //  return node.children.value.length > 0;
  };

  getLevel = (node: NavFlatNode): number => {
    return node.level;
    // return this.levels.get(node) || 0;
  };

  getChildren = (node: NavJson) => {
    return node.children;
  };


  treeFlattener = new MatTreeFlattener(this._transformer, this.getLevel, this.isExpandable, this.getChildren);
  dataSource: MatTreeFlatDataSource<NavJson, any> = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NavFlatNode) => node.expandable;

  hasChildren = (index: number, node: NavTreeNode): boolean => {
    return node.children.value.length > 0;
  };


  constructor(
    private config: ApiConfigService
  ) {

    this.nav$ = this.config.config$.pipe(map(cfg => cfg.nav));
    this.nav$.subscribe(nav => {
      console.log(nav);
      this.dataSource.data = nav;
    })
  }





  transformer = (node: NavTreeNode, level: number) => {
    this.levels.set(node, level);
    return node;
  }


  /*isOdd(node: NavTreeNode) {
    return this.getLevel(node) % 2 === 1;
  }*/

}

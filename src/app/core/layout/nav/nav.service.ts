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
  label: string;
  complete: boolean;
  nextTab: boolean;
  path: string;
  children?: NavJson[];
}


export interface NavFlatNode {
  expandable: boolean;
  label: string;
  complete: boolean;
  level: number;
  nextTab: boolean;
  path: string;
  isExpanded?: boolean;
}

@Injectable()
export class NavService {



  recursive = false;
  // levels = new Map<NavFlatNode, number>();

  nav$: Observable<NavJson[]>;
 // private path: {[path: string]: number};

  private _transformer = (node: NavJson, level: number) => {
    const label: string = node.label;
    const id = node.id;
    const nextTab = node.nextTab;
    const path = node.path;

    const expandable = !!node.children && node.children.length > 0;
    const complete = expandable ? node.children.every(function (item) {
      return item.complete;
    }) : node.complete;

    return {
      expandable,
      label,
      level,
      complete,
      path
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


  treeControl: FlatTreeControl<NavFlatNode> = new FlatTreeControl<NavFlatNode>(this.getLevel, this.isExpandable);
  treeFlattener = new MatTreeFlattener(this._transformer, this.getLevel, this.isExpandable, this.getChildren);

  dataSource: MatTreeFlatDataSource<NavJson, any> = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  dataSource2: MatTreeFlatDataSource<NavJson, any> = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  paths: {[path: string]: NavJson[]} = {};


  hasChildren = (index: number, node: NavFlatNode): boolean => {
    return node.expandable;
   // return node.children.value.length > 0;
  };


  constructor(
    private config: ApiConfigService
  ) {

    this.nav$ = this.config.config$.pipe(map(cfg => cfg.nav));
    this.nav$.subscribe(nav => {
      console.log(nav);
      nav.forEach(item => NavService.nextPath(item, null, this.paths));


      this.dataSource.data = nav;
    })
  }

 static nextPath(node: NavJson, path: string, second: any) {
    if (!node.id) { node.id = node.label }
    node.path = path ? path + '.' + node.id : node.id;
    if (node.children) {
      node.children.forEach((item) => {
        NavService.nextPath(item, node.path, second)
      });
      if (node.nextTab) {
        second[ node.path] = node.children;
        node.children = null;
      }
    }
  }

  setSecond(path: string) {
    const navs = this.paths[path];
    if (navs) {  this.dataSource2.data = navs; }
    return navs
  }


 /* transformer = (node: NavFlatNode, level: number) => {
    this.levels.set(node, level);
    return node;
  }
*/

  /*isOdd(node: NavTreeNode) {
    return this.getLevel(node) % 2 === 1;
  }*/

}

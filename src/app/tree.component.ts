import {
  Component,
  Inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material';
import { NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';

export interface DataNode {
  key: string;
  value: string;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
})
export class TreeComponent {
  treeControl: NestedTreeControl<DataNode>;
  dataSource: MatTreeNestedDataSource<DataNode>;

  private _getChildren = (node: DataNode): Observable<DataNode[]> => of([]);

  constructor(
    public dialogRef: MatDialogRef<TreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.treeControl = new NestedTreeControl<DataNode>(this._getChildren);
      this.dataSource = new MatTreeNestedDataSource<DataNode>();
      this.dataSource.data = this.toKeyValuePairs(data);
    }

  private toKeyValuePairs(data: object): DataNode[] {
    const nodes = Object.keys(data).map((key) => {
      const value = data[key];
      return {
        key,
        value,
      }
    });

    // Do not show array values or nulls
    return nodes.filter((node) => !_.isArray(node.value) && !_.isEmpty(node.value));
  }
}
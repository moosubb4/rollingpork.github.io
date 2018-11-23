import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

export interface Configoption {
  rowSelection: number[];
  totalSize: number;
  row: number;
}

export interface SortBack {
  page: number;
  rowSelect: number;
}


@Component({
  selector: 'app-paginators',
  templateUrl: './paginators.component.html',
  styleUrls: ['./paginators.component.css']
})

export class PaginatorsComponent implements OnInit, OnChanges {

  public page: number;
  public pageCurrent: number[] = [];
  public row: number;
  public size: number;
  public sizing: number[] = [];
  public totalSize: number;
  public sort: number;
  public rowsPerPageOptions: number[] = [];
  public SortBacks: SortBack = { page: 1, rowSelect: 10 };
  public rowSelection: number[] = [];
  // public disabled: boolean = true;
  // @Input() rowSelection: number[] = []; // row per page to display option [10,20,30]
  @Output() pageSelect: EventEmitter<number> = new EventEmitter(); // = new EventEmitter<number>();
  @Input() configOption: Configoption;
  @Output() SortBack: EventEmitter<SortBack> = new EventEmitter();

  constructor() {
    this.rowSelection = [5, 10, 20];
    this.row = 0;
    this.totalSize = 0;
    this.size = 0;
  }

  ngOnInit() {
    this.page = 1;
    // Object.keys(this.configOption).length > 0 ? this.disabled = true : this.disabled = false;
  }

  ngOnChanges() {
    if (this.configOption && this.configOption.totalSize > 0) {
      // Object.keys(this.configOption).length > 0 ? this.disabled = true : this.disabled = false;
      this.row = this.configOption.row;
      this.totalSize = this.configOption.totalSize;
      this.rowsPerPageOptions = this.rowSelection;
      this.row = (this.rowsPerPageOptions.filter(key => this.row === key))[0];
      // this.size = Math.ceil(this.totalSize / this.row);
      // if (this.size) {
      //   this.sizing = Array(this.size).fill(2).map((x, i) => i + 1);
      // }
      if (this.pageCurrent.length === 0) {
        this.initPageList();
      }

      this.SortBacks.rowSelect = this.row;
      this.SortBacks.page = this.page;
    } else {
      this.pageCurrent = [];
      this.size = 0;
    }
  }

  onSelectpage(pg) {
    this.page = pg;
    this.pageSelect.emit(pg);
    this.SortBacks.page = pg;
    this.SortBack.emit(this.SortBacks);
  }

  goFirst() {
    this.page = 1;
    this.showPage(this.page);
  }

  golast() {
    this.page = this.size;
    this.showPage(this.page);
  }

  onPrevious() {
    if (this.page <= 1) {
      this.page = 1;
    } else {
      this.page--;
    }
    this.showPage(this.page);
  }

  onNext() {
    if (this.page === this.size) {
      this.page = this.size;
    } else {
      this.page++;
    }
    this.showPage(this.page);
  }

  showPage(pg) {
    const last = this.size - 2;
    const sizePage = this.pageCurrent.length;
    if (this.page > 3 && this.page < last) {
      this.pageCurrent = this.sizing.slice(pg - 3, pg + 2);
      this.sentSort(pg);
    } else if (this.page > last) {
      this.pageCurrent = this.sizing.slice(this.size - sizePage, this.size);
      this.sentSort(pg);
    } else if (this.page < sizePage) {
      this.pageCurrent = this.sizing.slice(0, 5);
      this.sentSort(pg);
    } else {
      this.pageCurrent = this.sizing.slice(pg - 3, this.size);
      this.sentSort(pg);
    }
  }

  sentSort(pg) {
    this.SortBacks.page = pg;
    this.SortBacks.rowSelect = this.row;
    this.SortBack.emit(this.SortBacks);
  }

  onSelectrow() {
    this.size = Math.ceil(this.totalSize / this.row);
    this.sizing = Array(this.size).fill(2).map((x, i) => i + 1);
    this.goFirst();
    this.SortBacks.rowSelect = this.row;
    this.SortBack.emit(this.SortBacks);
  }

  setPage(page, config) {
    this.configOption = config;
    this.page = page;
    if (page === 1) {
      this.initPageList();
    }
  }

  initPageList() {
    if (this.configOption && this.configOption.totalSize > 0) {
      this.row = this.configOption.row;
      this.totalSize = this.configOption.totalSize;
      this.size = Math.ceil(this.totalSize / this.row);
      this.sizing = Array(this.size).fill(2).map((x, i) => i + 1);
      let max = 5;
      if (max > this.size) {
        max = this.size;
      }
      this.pageCurrent = this.sizing.slice(0, max);
    }
  }

  disableBack() {
    if (this.configOption == null) {
      return true;
    }
    if (this.configOption.totalSize === 0 || this.page === 1) {
      return true;
    }
    return false;
  }

  disableNext() {
    if (this.configOption == null) {
      return true;
    }
    if (this.configOption.totalSize === 0 || this.page === this.size) {
      return true;
    }
    return false;
  }
}

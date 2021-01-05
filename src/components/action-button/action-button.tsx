import {Component, h, Prop, State} from '@stencil/core';

const IconMore = <svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M6,12.5 C6,11.6715729 6.66579723,11 7.5,11 C8.32842712,11 9,11.6657972 9,12.5 C9,13.3284271 8.33420277,14 7.5,14 C6.67157288,14 6,13.3342028 6,12.5 Z M11,12.5 C11,11.6715729 11.6657972,11 12.5,11 C13.3284271,11 14,11.6657972 14,12.5 C14,13.3284271 13.3342028,14 12.5,14 C11.6715729,14 11,13.3342028 11,12.5 Z M16,12.5 C16,11.6715729 16.6657972,11 17.5,11 C18.3284271,11 19,11.6657972 19,12.5 C19,13.3284271 18.3342028,14 17.5,14 C16.6715729,14 16,13.3342028 16,12.5 Z"></path></svg>

@Component({
  tag: 'action-button',
  styleUrl: 'action-button.css',
  shadow: true,
})
export class ActionButton {

  @State() isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  render() {
    return <div class="action-button-root">
      <button class="action-button" onClick={_ => this.open()}>{IconMore}</button>
      {this.isOpen && (
        <div class="click-trap" onClick={_ => this.close()}/>
      )}
      {this.isOpen && (
        <div class="menu"></div>
      )}
    </div>
  }
}
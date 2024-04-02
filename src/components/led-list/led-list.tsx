import { Component, Host, h } from '@stencil/core';
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'

@Component({
  tag: 'led-list',
  styleUrl: 'led-list.css',
  shadow: true,
})
export class LedList {

  waitingPatients: any[];

  private async getWaitingPatientsAsync(){
    return await Promise.resolve(
      [{
          name: 'Janko Hraško',
          patientId: '10001',
          dateStart: new Date(Date.now()).toISOString(),
          dateEnd: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString()
      }, {
          name: 'Jožko Mrkvička',
          patientId: '10096',
          dateStart: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(),
          dateEnd: new Date(Date.now() + 50 * 24 * 60 * 60 * 1000).toISOString()
      }]
    );
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  render() {
    return (
      <Host>
        <h2>Zoznam liečebných plánov</h2>
        <md-list>
          {this.waitingPatients.map(patient =>
            <md-list-item>
              <div slot="headline">Liečebný plán pacienta:</div>
              <div slot="headline">{patient.name}</div>
              <div slot="supporting-text">{"Začiatok liečby: " + this.isoDateToLocale(patient.dateStart)}</div>
              <div slot="supporting-text">{"Koniec liečby: " + this.isoDateToLocale(patient.dateEnd)}</div>
                <md-icon slot="start">person</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }
  private isoDateToLocale(iso:string) {
    if(!iso) return '';
    return new Date(Date.parse(iso)).toLocaleDateString()
  }
}

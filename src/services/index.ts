import IAlertService from './IAlertService';
import AlertService from './AlertService';

const alertService: IAlertService = new AlertService();

export {
  //
  alertService as AlertService,
};

export async function initializeServicesAsync() {}

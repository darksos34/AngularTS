export interface INotifcation {
  message: string;
  title: string;
  type: NotificationType;
}

export enum NotificationType {
  information,
  warning,
  success,
  error,
  suggestion,
  blocked
}

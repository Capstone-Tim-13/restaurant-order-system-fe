import { toast } from 'react-hot-toast';

export const notifySuccess = (message, id) => toast.success(message, { id });

export const notifyError = (message, id) => toast.error(message, { id });

export const notifyLoading = (message, id) => toast.loading(message, { id });

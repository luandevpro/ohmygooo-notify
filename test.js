const notify = require('./index');

notify({ type: 'success', message: 'Success' });
notify({ type: 'warning', message: 'Warining' });
notify({ type: 'info', message: 'Info' });
notify({ type: 'error', message: 'Error' });

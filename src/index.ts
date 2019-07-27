 // tslint:disable: no-console
import { app } from './app';
import { loadProductsCatsFile } from './data';
import { getConfig } from './utils/config';

const port = +(getConfig('PORT', 3000));
app.set('port', port);
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(
    ' App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log(' Press CTRL-C to stop\n');

  loadProductsCatsFile(port); //load data - client request with fetch 

});

/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { addDrugsController } from './chiefPharmacist/addDrugs/addDrugs.controller';
import { updateDrugsController } from './chiefPharmacist/updateDrugs/updateDrugs.controller';
import { assistantPharmacistController } from './assistantPharmacist/assistantPharmacist.controller';
import { addNewBatch } from './chiefPharmacist/addNewBatch/addNewBatch.controller';
import { chiefPharmacistController } from './chiefPharmacist/chiefPharmacist.controller';
import { doctorController } from './doctor/doctor.controller';
import { authenticateController } from './authenticate/authenticate.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('pharmacyFrontEndProject', ['ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('assistantPharmacistController', assistantPharmacistController)
  .controller('chiefPharmacistController', chiefPharmacistController)
  .controller('doctorController', doctorController)
  .controller('MainController', MainController)
  .controller('addDrugsController', addDrugsController)
  .controller('updateDrugsController', updateDrugsController)
  .controller('authenticateController', authenticateController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);

StateManager
============

javascript module for managing url state



Example:
if your current location is: www.mydomain.com/index.html?category=pets&animal[]=cat&animal[]=dog

var stateManager = new StateManager();
stateManager.readUrl();

var c = stateManager.getState('category');
//c == 'pets'

var a = stateManager.getState('animal[]');
//a = ['cat','dog'];

stateManager.setState('category','zoo');
// updates the current URL to be: www.mydomain.com/index.html?category=zoo&animal[]=cat&animal[]=dog

stateManager.setState('animal[]','ping');
// updates the current URL to be: www.mydomain.com/index.html?category=pets&animal[]=cat&animal[]=dog&animal[]=pig

stateManager.removeState('animal[]','dog');
// removes "animal[]=dog" from the current URL

stateManager.clearState('animal[]');
// removes "animal[]=cat&animal[]=dog" from the current URL

stateManager.clearState('category');
// removes "category=pets" from the url

var h = stateManager.getStates();
// h == {category: 'pets', animal: {'cat': 1, 'dog': 1}}



UrlManager
============

UrlManager is a javascript class that gives you an easy way to get and set url parameters.  


Example:

     if your current url is: 
     www.mydomain.com/index.html?category=pets&animal[]=cat&animal[]=dog

     var urlManager = new UrlManager();
     urlManager.readUrl();
    
     var c = urlManager.getParam('category');
     //c == 'pets'

     var a = urlManager.getParam('animal[]');
     //a = ['cat','dog'];

     urlManager.setParam('category','zoo');
     // updates the current URL to be: www.mydomain.com/index.html?category=zoo&animal[]=cat&animal[]=dog
     
     urlManager.setParam('animal[]','ping');
     // updates the current URL to be: www.mydomain.com/index.html?category=pets&animal[]=cat&animal[]=dog&animal[]=pig
     
     urlManager.removeParam('animal[]','dog');
     // removes "animal[]=dog" from the current URL
     
     urlManager.clearParam('animal[]');
     // removes "animal[]=cat&animal[]=dog" from the current URL
     
     urlManager.clearParam('category');
     // removes "category=pets" from the url
     
     var h = urlManager.getParams();
     // h == {category: 'pets', animal: {'cat': 1, 'dog': 1}}



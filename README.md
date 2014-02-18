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


## License

Copyright (C) 2011-2013 by Shutterstock Images, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

class BrowserWindow {
    constructor(accountName, windowName, tabs = [{tabURL: 'defaultHomePage.com'}]){
        this.accountName = accountName;
        this.windowName = windowName;
        this.tabs = tabs;
    }

    joinWindows(window){
        for (let i = 0; i < window.tabs.length; i++){
            this.tabs.push(window.tabs[i]);
        }
    }

    newTab(URL){
        this.tabs.push({'tabURL': URL});
    }

    closeTab(ind){
        this.tabs.splice(ind, 1);
        if (this.tabs.length === 0){
            this.tabs = [{tabURL: 'defaultHomePage.com'}];
        }
    }


}

chromeWindow = new BrowserWindow('Robert Brown', 'Email');
firefoxWindow = new BrowserWindow('Abigale Miller', 'Social Media', [
      { tabURL: 'twitter.com' },
    ]);

chromeWindow.newTab('gmail.com');
console.log(chromeWindow)
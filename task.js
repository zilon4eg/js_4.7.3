const tabs = document.getElementById('tabs1').querySelectorAll('.tab');
const tabsContents = document.getElementById('tabs1').querySelectorAll('.tab__content');

tabs.forEach(function(tab) {
    tab.addEventListener('click', () => {
        onClickTabText = tab.textContent.trim();
        let activeTabPosition;

        for (i=0; i<tabs.length; i++) {
            if (tabs[i].textContent.trim() === onClickTabText) {
                activeTabPosition = i;
                tabs[i].className = 'tab tab_active';
                tabsContents[i].className = 'tab__content tab__content_active';
            }
            else {
                tabs[i].className = 'tab';
                tabsContents[i].className = 'tab__content';
            }
        }
        
    });
});




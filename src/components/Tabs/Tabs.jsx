export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  let finalActiveTabId = activeTabId;

  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTabId);
  const firstTabIndex = tabs.findIndex(tab => tab.id === tabs[0].id);

  if (activeTabIndex === -1) {
    finalActiveTabId = tabs[firstTabIndex].id;
  }

  const displayContent = !activeTab ? tabs[0].content : activeTab.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={finalActiveTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {displayContent}
      </div>
    </div>
  );
};

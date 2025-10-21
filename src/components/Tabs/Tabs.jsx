export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTabContent = tabs.find(tab => tab.id === activeTabId);

  let effectiveActiveTabId = activeTabId;

  if (!activeTabContent) {
    effectiveActiveTabId = tabs[0].id;
    activeTabContent = tabs.find(tab => tab.id === effectiveActiveTabId);

    onTabSelected(effectiveActiveTabId);
  }

  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={effectiveActiveTabId === tab.id ? 'is-active' : ''}
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
        {activeTabContent.content}
      </div>
    </div>
  );
};

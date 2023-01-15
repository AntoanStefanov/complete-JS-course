'use strict';

/**
 * Tabbed component.
 */
function tabbedComponent() {
  let clickedTab = document.querySelector('.operations__tab--active');
  let showedTabContent = document.querySelector('.operations__content--active');

  /**
   *
   * @param {Event} event
   */
  function tabClickHandler(event) {
    const target = event.target; // target could be the span el in the btn el.

    // 1st, if we click the tab continer, this returns null.
    // 2nd, if we click the span el in the btn el, this returns the btn.
    // 3rd, if we click the button itself, this returns the button ITSELF.
    // 4th, if we click the text node in the btn, this returns the btn itself ->
    // (the text node for some reason is not clickable, it's part of the btn)
    const tab = target.closest('.operations__tab');

    if (!tab) return;

    if (clickedTab === tab) return;

    deactivateTabAndContent(clickedTab, showedTabContent);

    activateTab(tab);
    showActivatedTabContent(tab);
  }

  /**
   *
   * @param {HTMLButtonElement} tab
   * @param {HTMLButtonElement} tabContent
   */
  function deactivateTabAndContent(tab, tabContent) {
    tab.classList.remove('operations__tab--active');
    tabContent.classList.remove('operations__content--active');
  }

  /**
   *
   * @param {HTMLButtonElement} tab
   */
  function activateTab(tab) {
    clickedTab = tab;
    clickedTab.classList.add('operations__tab--active');
  }

  /**
   *
   * @param {HTMLButtonElement} activatedTab
   */
  function showActivatedTabContent(activatedTab) {
    const contentToBeShown = document.querySelector(
      `.operations__content--${activatedTab.dataset.tab}`,
    );
    contentToBeShown.classList.add('operations__content--active');
    showedTabContent = contentToBeShown;
  }

  // Event delegation
  const tabsContainer = document.querySelector('.operations__tab-container');
  tabsContainer.addEventListener('click', tabClickHandler);
}

tabbedComponent();

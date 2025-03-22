// Tab Functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabButtons = document.querySelectorAll('.sub-tab-button');
  const subTabContents = document.querySelectorAll('.sub-tab-content');
  const selectedItemsList = document.getElementById('selected-items-list');

  // Main Tabs
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to the clicked button and corresponding content
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Sub-Tabs
  subTabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all sub-buttons and sub-contents
      subTabButtons.forEach(btn => btn.classList.remove('active'));
      subTabContents.forEach(content => content.classList.remove('active'));

      // Add active class to the clicked sub-button and corresponding sub-content
      button.classList.add('active');
      const subTabId = button.getAttribute('data-sub-tab');
      document.getElementById(subTabId).classList.add('active');
    });
  });

  // Cup Size Selector
  const cupSizeSelector = document.getElementById('cup-size');
  cupSizeSelector.addEventListener('change', () => {
    const selectedCupSize = cupSizeSelector.value;
    alert(`Selected Cup Size: ${selectedCupSize} oz`);
  });

  // Plate Size Selector
  const plateSizeSelector = document.getElementById('plate-size');
  plateSizeSelector.addEventListener('change', () => {
    const selectedPlateSize = plateSizeSelector.value;
    alert(`Selected Plate Size: ${selectedPlateSize} inches`);
  });

  // Add Items to Selected List
  document.querySelectorAll('.sub-tab-content ul li').forEach(item => {
    item.addEventListener('click', () => {
      const selectedItem = item.textContent;
      const listItem = document.createElement('li');
      listItem.textContent = selectedItem;
      selectedItemsList.appendChild(listItem);
    });
  });
});
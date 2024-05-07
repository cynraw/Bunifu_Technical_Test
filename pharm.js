const pharmacyListDiv = document.querySelector('#pharmacy-list');
const searchInput = document.querySelector('#search');

const pharmacyList = [
  {
    name: 'Starlight Pharmacy',
    address: '123 Main St',
    town: 'Nairobi',
    bgColor: '#e1dcf3',
  },
  {
    name: 'Green Cross Pharmacy',
    address: '456 Main St',
    town: 'Nairobi',
    bgColor: '#f3e1e1',
  },
  {
    name: 'Sunshine Pharmacy',
    address: '789 Main St',
    town: 'Nairobi',
    bgColor: '#e1f3e1',
  },
  {
    name: 'Moonlight Pharmacy',
    address: '101 Main St',
    town: 'Nairobi',
    bgColor: '#f3f3e1',
  },
];

const mappedPharms = pharmacyList.map((pharmacy) => {
  const li = document.createElement('li');
  li.style.backgroundColor = pharmacy.bgColor;
  li.classList.add('pharmacy');
  li.innerHTML = `
    <h4>${pharmacy.name}</h4>
    <p>${pharmacy.address}, ${pharmacy.town}</p>
  `;
  return li;
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  pharmacyListDiv.append(...mappedPharms);
});

searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredPharms = pharmacyList.filter((pharmacy) => {
    return (
      pharmacy.name.toLowerCase().includes(searchValue) ||
      pharmacy.town.toLowerCase().includes(searchValue) ||
      pharmacy.address.toLowerCase().includes(searchValue)
    );
  });

  const mappedFilteredPharms = filteredPharms.map((pharmacy) => {
    const li = document.createElement('li');
    li.style.backgroundColor = pharmacy.bgColor;
    li.classList.add('pharmacy');
    li.innerHTML = `
        <h4>${pharmacy.name}</h4>
        <p>${pharmacy.address}, ${pharmacy.town}</p>
        `;
    return li;
  });

  pharmacyListDiv.innerHTML = '';
  pharmacyListDiv.append(...mappedFilteredPharms);
});

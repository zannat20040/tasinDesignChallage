const countryStates = {
    US: ["California", "Texas", "Florida", "New York", "Illinois"],
    BD: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"],
    CA: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    IN: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Kerala"],
    PK: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad"],
    UK: ["England", "Scotland", "Wales", "Northern Ireland"],
    CN: ["Beijing", "Shanghai", "Guangdong", "Zhejiang", "Sichuan"],
    NL: ["North Holland", "South Holland", "Utrecht", "Gelderland", "Flevoland"],
  };

  function changeStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");

    stateSelect.innerHTML = '<option value="" disabled selected>Choose...</option>';

    const selectedCountry = countrySelect.value;

    if (countryStates[selectedCountry]) {
      countryStates[selectedCountry].forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
      });
    }
  }
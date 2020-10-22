// Hover on products

var productButton = document.getElementById("products");
var productDrop = document.getElementById("products-sub");

function openProducts() {
  productDrop.classList.toggle("show");
};

productButton.addEventListener("mouseenter", openProducts);
productButton.addEventListener("mouseleave", openProducts);


// Hover on services
var servicesButton = document.getElementById("services");
var servicesDrop = document.getElementById("services-sub");

function openServices() {
  servicesDrop.classList.toggle("show");
};

servicesButton.addEventListener("mouseenter", openServices);
servicesButton.addEventListener("mouseleave", openServices);


// Hover on company

var companyButton = document.getElementById("company");
var companyDrop = document.getElementById("company-sub");

function openCompany() {
  companyDrop.classList.toggle("show");
};

companyButton.addEventListener("mouseenter", openCompany);
companyButton.addEventListener("mouseleave", openCompany);

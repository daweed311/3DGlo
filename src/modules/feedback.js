"use strict";

const feedback = () => {
  const userNames = document.querySelectorAll('input[name="user_name"]');
  const userMessage = document.querySelector('input[name="user_message"]');
  const userPhone = document.querySelectorAll('input[name="user_phone"]');
  const userEmail = document.querySelectorAll('input[name="user_email"]');
  const userAll = document.querySelectorAll("form input");

  const invalid = {
    text: /[^а-я-\s]+/gi,
    email: /[^a-z\_\-\@\.\!\~\*\']+/gi,
    rus: /[а-я]/gi,
    phone: /[^\d\-()']+/gi,
    trimSH: /(^[\s\-]+|^)(.*?)(?:([\s\-]+$)|$)/i,
    multySH: /(\s{2,})|(\-{2,})/g,
    wordFirst: /((^|\s\-|\s|\-)[а-я])([а-я]*)/gi,
  };
  userNames.forEach((field) => {
    field.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(invalid.text, "");
    });
    field.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(
        invalid.wordFirst,
        (word, first, f1, other) => first.toUpperCase() + other.toLowerCase()
      );
    });
  });
  userMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(invalid.text, "");
  });
  userPhone.forEach((field) => {
    field.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(invalid.phone, "");
    });
  });
  userEmail.forEach((field) => {
    field.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(invalid.email, "");
    });
    field.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(invalid.rus, (rus) => "");
    });
  });

  userAll.forEach((field) => {
    field.addEventListener("blur", (e) => {
      let value = e.target.value;
      value = value.replace(invalid.trimSH, (str, begin, sense) => `${sense}`);
      value = value.replace(
        invalid.multySH,
        (str, spaces, hyphens) => (spaces ? " " : "") + (hyphens ? "-" : "")
      );

      e.target.value = value;
    });
  });
};

export default feedback;

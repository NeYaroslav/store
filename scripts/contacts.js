import Validator from "./Validator";
import watchTemplate from "./watchTemplate";

const header = document.getElementById("header");
const footer = document.getElementById("footer");
watchTemplate(header, footer);

const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const form = document.getElementById("form");
const error = document.getElementById("error");

const validator = new Validator(
  emailInput,
  nameInput,
  messageInput,
  error,
  form
);

validator.watch();

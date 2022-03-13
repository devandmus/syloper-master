const EMAIL_FORMAT = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
const PASSWORD_PATTERN = /^.{8,}$/;
const PHONE_PATTERN = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

module.exports = {
  EMAIL_FORMAT,
  PASSWORD_PATTERN,
  PHONE_PATTERN,
}

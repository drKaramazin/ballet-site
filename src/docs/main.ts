import {
  Ballet,
} from "ballet";

const versionEl = document.getElementById('version');
versionEl!.textContent = Ballet.version();

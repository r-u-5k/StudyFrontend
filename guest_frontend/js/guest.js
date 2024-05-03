import { GuestMainComponent } from "./GuestMainComponent.js";
import { GuestListComponent } from "./GuestListComponent.js";
import { GuestViewComponent } from "./GuestViewComponent.js";
import { GuestWriteFormComponent } from "./GuestWriteFormComponent.js";
import { GuestModifyFormComponent } from "./GuestModifyFormComponent.js";

/*
#/guest_main
#/guest_list
#/guest_view/1
#/guest_write_form
#/guest_modify_form
*/
const navigate = (hash) => {
  if (hash == '#/guest_home') {
    GuestMainComponent();
  } else if (hash == '#/guest_list') {
    GuestListComponent();
  } else if (hash.startsWith('#/guest_view')) {
    GuestViewComponent(hash.substring(hash.lastIndexOf('/') + 1));
  } else if (hash == '#/guest_write_form') {
    GuestWriteFormComponent();
  } else if (hash.startsWith('#/guest_modify_form')) {
    GuestModifyFormComponent(hash.substring(hash.lastIndexOf('/') + 1));
  }
};

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  console.log(hash);
  navigate(hash);
});

window.addEventListener('click', (e) => {
  if (e.target.matches('[data-navigate]')) {
    location.hash = e.target.dataset.navigate;
  }
});

window.addEventListener('load', () => {
  let hash = window.location.hash;
  if (window.location.hash == null || window.location.hash == '') {
    hash = '#/guest_home';
  }
  navigate(hash);
});

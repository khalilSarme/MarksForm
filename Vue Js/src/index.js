$(document).ready(function() {
  let appCreatedAt = 2025;
  let date = new Date();
  let cur = (appCreatedAt === date.getFullYear()) ? appCreatedAt : `${appCreatedAt}-${date.getFullYear()}`;
  $('#date').html(`${cur}`);
  
});